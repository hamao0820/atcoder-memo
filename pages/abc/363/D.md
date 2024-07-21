---
title: D - Palindromic Number
tags:
---

# D - Palindromic Number

## 解説

[問題](https://atcoder.jp/contests/abc363/tasks/abc363_d)

回文は、左右対称であることから、左半分を決めれば右半分を決めることができる。したがって、左半分として考えられるものの個数を考えれば良い。

$1$ 以上の $d$ 桁の整数を考える。 $d$ 桁の回文数の個数は

- $d$ が偶数の場合:　左半分としてあり得るのは $\underbrace{10\dots0}_{d/2} \sim \underbrace{99\dots9}_{d/2}$ から

  $$
  99\dots9 - 10\dots0 + 1 = 9\cdot10^{d/2-1}
  $$

- $d$ が奇数の場合: 左半分としてあり得るのは $\underbrace{10\dots0}_{(d-1)/2} \sim \underbrace{99\dots9}_{(d-1)/2}$ で、中心に $0,1,\dots,9$ がくるため、
  $$
  9\cdot10^{(d-1)/2 - 1} \times 10 = 9\cdot10^{(d-1)/2}
  $$

よって、 $d$ 桁の回文数の個数を $a_d$ とすると、

$$
a_0 = 1, a_1 = 9, a_2 = 9, a_3 = 90, a_4 = 90, a_5 = 900, a_6 = 900, \dots
$$

となる。(ただし、$0$ は $0$ 桁とする。)

$\sum\limits_{i=0}^{d}{a_i} \ge N$ となる最小の $d$ を求めることで、 $N$ 番目の回文数の桁数を求めることができる。また、そのような $d$ に対して、 $N$ 番目の回文数は、 $d$ 桁の回文数のうち、 $N - \sum\limits_{i=0}^{d}{a_i}$ 番目のものとなる。

$d$ 桁の回文数のうち、 $n$ 番目の回文数は、

- $d$ が偶数の場合: 左半分を $10^{\lceil d/2 \rceil - 1} + n - 1$ として、右半分を左半分の逆順にしたものをくっつける

- $d$ が奇数の場合: 左半分を $10^{\lceil d/2 \rceil - 1} + n - 1$ として、右半分を左半分の逆順にしたものの最初の文字を取り除いたものをくっつける

となる。

## 提出コード

- Go

```go
func nthPalindrome(k int, n int) string {
	halfLength := (k + 1) / 2
	start := pow(10, halfLength-1)
	halfNumber := start + n - 1

	halfStr := fmt.Sprintf("%d", halfNumber)
	palindrome := halfStr

	for i := k % 2; i < halfLength; i++ {
		palindrome += string(halfStr[halfLength-1-i])
	}

	return palindrome
}

func main() {
	n := readInt()
	if n == 1 {
		writeLine("0")
		return
	}
	n--
	x := 9
	for i := 1; ; i++ {
		if n < x {
			writeLine(nthPalindrome(i, n))
			return
		}
		n -= x
		if i%2 == 0 {
			x *= 10
		}
	}
}
```

- C++

```cpp
string nthPalindrome(int k, ll n) {
    ll halfLength = (k + 1) / 2;
    ll start = pow(10, halfLength - 1);
    ll halfNumber = start + n - 1;

    string halfStr = to_string(halfNumber);
    string palindrome = halfStr;

    for (ll i = k % 2; i < halfLength; ++i) {
        palindrome += halfStr[halfLength - 1 - i];
    }

    return palindrome;
}

int main() {
    ll n; cin>>n;
    if (n == 1) {
        cout << 0 << endl;
        return 0;
    }
    n--;
    ll x = 9;
    for (int i = 1;;i++) {
        if (n - x <= 0) {
            cout << nthPalindrome(i, n) << endl;
            return 0;
        }
        n -= x;
        if (i % 2 == 0) x *= 10;
    }

}
```
