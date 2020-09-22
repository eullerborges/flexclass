#pragma once

#include <algorithm>
#include <cassert>
#include <limits>
#include <memory>
#include <tuple>
#include <type_traits>
#include "tuple.hpp"

namespace fc
{

namespace handle
{
struct range {};
struct array {};
}

template<class T>
void reverse_destroy(T* b, T* e)
{
    if (b != e)
    {
        while (1)
        {
            e--;
            e->~T();
            if (e == b) break;
        }
    }
}

template<class T>
struct ArrayDeleter
{
    ArrayDeleter(T* begin) : m_begin(begin), m_end(begin) {}

    ~ArrayDeleter()
    {
        reverse_destroy(m_begin, m_end);
    }

    void setEnd(T* end) { m_end = end; }
    void release() { m_begin = m_end = nullptr; }

    T *m_begin {nullptr}, *m_end {nullptr};
};

inline void* incr(void* in, std::size_t len) { return static_cast<char*>(in) + len; }

template<class T>
inline auto align(void* ptr)
{
    std::size_t space = std::numeric_limits<std::size_t>::max();
    return static_cast<T*>(std::align(alignof(T), 0, ptr, space));
}

template<class T>
struct aligner_impl
{
    aligner_impl& advance(std::size_t len) { ptr += len; return *this; };
    template<class U> auto cast() { return aligner_impl<U>{align<U>(ptr)}; }
    template<class U> auto get() { return cast<U>().ptr; }
    T* ptr;
};

template<class T> auto aligner(T* t) { return aligner_impl<T>{t}; }
template<class T> auto aligner(const T* t) { return aligner_impl<T>{const_cast<T*>(t)}; }
template<class T> auto aligner(T* t, std::size_t len) { return aligner_impl<T>{t}.advance(len); }
template<class T> auto aligner(const T* t, std::size_t len) { return aligner_impl<T>{const_cast<T*>(t)}.advance(len); }

template<class T>
struct ArrayBuilder
{
    ArrayBuilder(std::size_t size) : m_size(size) {}

    ~ArrayBuilder()
    {
        if (m_ptr) reverse_destroy(begin(), end());
    }

    void consume(void*& buf, std::size_t& space)
    {
        auto ptr = std::align(alignof(T), numBytes(), buf, space);
        assert(ptr);
        space -= numBytes();
        buf = incr(buf, numBytes());

        auto b = static_cast<T*>(ptr);
        auto e = b + m_size;

        ArrayDeleter<T> deleter(b);
        while (b != e)
        {
            new (b) T;
            deleter.setEnd(++b);
        }
        deleter.release();
        m_ptr = ptr;
    }

    std::size_t numRequiredBytes(std::size_t offset)
    {
        std::size_t space = std::numeric_limits<std::size_t>::max();
        auto originalSpace = space;
        void* ptr = static_cast<char*>(nullptr) + offset;
        auto r = std::align(alignof(T), numBytes(), ptr, space);
        assert(r);
        return (originalSpace - space) + numBytes();
    }

    auto numBytes() const { return m_size*sizeof(T); }
    T* begin() const { return static_cast<T*>(m_ptr); }
    T* end() const { return begin() + m_size; }
    void release() { m_ptr = nullptr; }

    std::size_t m_size;
    void* m_ptr {nullptr};
};

template<class T> struct ArraySelector { using type = T; };

template<class T> struct is_array_placeholder : std::false_type {};
template<class T> struct is_array_placeholder<ArrayBuilder<T>> : std::true_type {};

template<class T> struct void_ { using type = void; };

template<class T, class = void> struct is_fc_array : std::false_type {};
template<class T> struct is_fc_array<T, typename void_<typename T::fc_handle>::type> : std::true_type
{
    using enable = T;
};

struct Ignore { Ignore() = default; template<class T> Ignore(T&&) {} };
template<class T, class = void> struct PreImplConverter { using type = Ignore; };
template<class T> struct PreImplConverter<T[], void> { using type = ArrayBuilder<T>; };
template<class T> struct PreImplConverter<T, typename void_<typename is_fc_array<T>::enable>::type>
{ using type = ArrayBuilder<typename T::type>; };

namespace detail
{
    template<typename T, typename F, int... Is>
    void for_each(T&& t, F f, std::integer_sequence<int, Is...>)
    {
        if constexpr (std::remove_reference_t<T>::Size > 0)
            auto l = { (f(get_element<Is>(t)), 0)... };
    }

    template<int I, int N, typename T1, typename T2, typename F>
    void for_each_zipped(T1&& t1, T2&& t2, F f)
    {
        if constexpr (I != N)
        {
            f(get_element<I>(t1), get_element<I>(t2));
            for_each_zipped<I+1, N, T1, T2, F>(t1, t2, f);
        }
    }
}

template<typename... Ts, typename F>
void for_each_in_tuple(fc::tuple<Ts...>& t, F f)
{
    detail::for_each(t, f, std::make_integer_sequence<int, sizeof...(Ts)>());
}

template <int ... Is>
constexpr auto reverseIntegerSequence(std::integer_sequence<int, Is...> const &)
{ return std::integer_sequence<int, sizeof...(Is)-1-Is...>{}; }

template<typename... Ts, typename F>
void reverse_for_each_in_tuple(const fc::tuple<Ts...>& t, F f)
{
    detail::for_each(t, f, reverseIntegerSequence(std::make_integer_sequence<int, sizeof...(Ts)>()));
}

template<typename... Ts, typename F>
void for_each_in_tuple(const fc::tuple<Ts...>& t, F f)
{
    detail::for_each(t, f, std::make_integer_sequence<int, sizeof...(Ts)>());
}

template<int I, typename T1, typename T2, typename F>
void for_each_zipped(T1& t1, T2& t2, F f)
{
    detail::for_each_zipped<0, I>(t1, t2, f);
}

template<class T, class = void> struct GetAlignmentRequirement { static constexpr auto value = alignof(T); };
template<class T> struct GetAlignmentRequirement<T[], void> { static constexpr auto value = alignof(T); };
template<class T> struct GetAlignmentRequirement<T, typename void_<typename is_fc_array<T>::enable>::type>
{ static constexpr std::size_t value = T::array_alignment; };

template<class... Types>
struct CollectAlignment
{
    static constexpr auto value = std::max({std::size_t(1), GetAlignmentRequirement<Types>::value...});
};

struct DeleteFn { void operator()(void* ptr) const { ::operator delete(ptr); } };

template<class Derived, class... T>
class alignas(CollectAlignment<T...>::value) FlexibleBase : public fc::tuple<typename ArraySelector<T>::type...>
{
  private:
    using Base = fc::tuple<typename ArraySelector<T>::type...>;
    using Base::Base;

  protected:
    using FLB = FlexibleBase;
    ~FlexibleBase() = default;

  public:
    static constexpr auto numMembers() { return Base::Size; }

    template<auto e> decltype(auto) get() { return get_element<e>(*this); }
    template<auto e> decltype(auto) get() const { return get_element<e>(*this); }

    template<auto e> decltype(auto) begin() const { return get_element<e>(*this).begin(this); }
    template<auto e> decltype(auto) end() const { return get_element<e>(*this).end(this); }

    template<auto e> decltype(auto) begin() { return get_element<e>(*this).begin(this); }
    template<auto e> decltype(auto) end() { return get_element<e>(*this).end(this); }

    struct DestroyFn { void operator()(Derived* ptr) const { Derived::destroy(ptr); } };

    using UniquePtr = std::unique_ptr<Derived, DestroyFn>;

    template<class... Args>
    static auto make_unique(Args&&... args)
    {
        return UniquePtr(make(std::forward<Args>(args)...));
    }

    template<class... Args>
    static auto make(Args&&... args)
    {
        static_assert(sizeof(Derived) == sizeof(FlexibleBase));

        using PreImpl = fc::tuple<typename PreImplConverter<T>::type...>;

        std::size_t numBytesForArrays = 0;
        {
            PreImpl pi(args...);

            for_each_in_tuple(pi,
                [&numBytesForArrays]<class U>(U& u) mutable {
                    if constexpr (is_array_placeholder<U>::value)
                        numBytesForArrays += u.numRequiredBytes(sizeof(FlexibleBase) + numBytesForArrays);
                });
        }

        auto implBuffer = std::unique_ptr<void, DeleteFn>(::operator new(sizeof(FlexibleBase) + numBytesForArrays));
        void* arrayBuffer = static_cast<char*>(implBuffer.get()) + sizeof(FlexibleBase);

        PreImpl pi(args...);

        for_each_in_tuple(pi,
            [&]<class U>(U& u) mutable {
                if constexpr (is_array_placeholder<U>::value)
                    u.consume(arrayBuffer, numBytesForArrays);
            });

        auto ret = new (implBuffer.get()) Derived(std::forward<Args>(args)...);

        for_each_zipped<sizeof...(T)>(*ret, pi,
            []<class U, class K>(U& u, K& k) {
                if constexpr (is_array_placeholder<K>::value)
                {
                    u.setLocation(k.begin(), k.end());
                    k.release();
                }
            });

        implBuffer.release();
        return ret;
    }

    static void destroy(const Derived* p)
    {
        if (!p) return;
        reverse_for_each_in_tuple(*p,
            [p]<class U>(U& u) {
                if constexpr (is_fc_array<std::remove_cv_t<U>>::value)
                if constexpr (!std::is_trivially_destructible<typename U::type>::value)
                {
                    reverse_destroy(u.begin(p), u.end(p));
                }
            });
        p->~Derived();
        ::operator delete(const_cast<Derived*>(p));
    }
};

template<class T> void destroy(const T* p) { T::destroy(p); }

template<class... Args>
struct FlexibleClass : public FlexibleBase<FlexibleClass<Args...>, Args...>
{
    using FlexibleBase<FlexibleClass<Args...>, Args...>::FlexibleBase;
};

}