---
title: A - 高橋君と青木君の好きな数
tags:
---

# A - 高橋君と青木君の好きな数

## キーワード

## 解説

[問題](https://atcoder.jp/contests/abc032/tasks/abc032_a)

愚直に全探索すればよい。
高々 $ab-1$ 回の探索で済むため、計算量は $\mathrm{O}(ab)$ 。

$n,a,b$ が大きい時は、

$$
\text{lcm}(a,b) \times \lceil \frac{n}{\text{lcm}(a,b)}
\rceil
$$

で求めるのがよい。一般に $\frac{b}{a}$ の切り上げは、$a+b-1$ を $a$ で割り切ればよい。

## 提出コード

```go
func main() {
	a := readInt()
	b := readInt()
	n := readInt()

	for i := n; ; i++ {
		if i%a == 0 && i%b == 0 {
			writeLine(i)
			break
		}
	}
}
```

```go
func main() {
	a := readInt()
	b := readInt()
	n := readInt()

	l := lcm(a, b)
	writeLine(l * ((n + l - 1) / l))
}
```
