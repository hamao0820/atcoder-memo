---
title: B - Foreign Exchange
tags:
---

# B - Foreign Exchange

## キーワード

## 解説

[問題](https://atcoder.jp/contests/abc341/tasks/abc341_b)

$i = 1$ から順番に、両替できるだけ両替していく。

$A_i \leftarrow A_i + \lfloor \frac{A_{i-1}}{S_{i-1}}\rfloor \times T_{i-1}$

## 提出コード

```go
func main() {
	n := readInt()
	A := readInts()
	ST := make([][2]int, n)
	for i := 0; i < n; i++ {
		scanIntVariables(&ST[i][0], &ST[i][1])
	}
	for i := 0; i < n-1; i++ {
		A[i+1] += A[i] / ST[i][0] * ST[i][1]
	}
	writeLine(A[n-1])
}
```
