---
title: C - Bingo 2
tags:
---

# C - Bingo 2

## 解説

[問題](https://atcoder.jp/contests/abc355/tasks/abc355_c)

各ターンでビンゴになる可能性があるのは、$A_i$ が含まれる列と行、対角線のみである。つまり、これらのみを調べればよい。

毎回行と列、対角線を調べると、各ターンの計算量が $\mathrm{O}(N)$ となり、間に合わない。

各行, 列, 対角線に含まれる数をカウントしておき、それが $N$ になったらビンゴが成立する。高々 $4$ 回の操作でビンゴが成立するかどうかを判定できるため、計算量は $\mathrm{O}(1)$ である。

全体の計算量は $\mathrm{O}(N+T)$ となる。

## 提出コード

```go
func main() {
	var n, t int
	scanIntVariables(&n, &t)
	A := readInts()
	R := make([]int, n)
	C := make([]int, n)
	Cross1 := 0
	Cross2 := 0
	for t, a := range A {
		r := (a - 1) / n
		c := (a - 1) % n
		R[r]++
		C[c]++
		if r == c {
			Cross1++
		}
		if r+c == n-1 {
			Cross2++
		}
		if R[r] == n || C[c] == n || Cross1 == n || Cross2 == n {
			writeLine(t + 1)
			return
		}
	}
	writeLine(-1)
}
```
