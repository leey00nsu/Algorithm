from fractions import Fraction

n, m = list(map(int, input().split()))


def fac(n):
    result = 1
    for i in range(1, n + 1):
        result *= i

    return result


print(int(Fraction(fac(n), (fac(m) * fac(n - m)))))
