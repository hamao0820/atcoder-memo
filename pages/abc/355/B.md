---
title: B - Piano 2
tags:
---

# B - Piano 2

## 解説

[問題](https://atcoder.jp/contests/abc355/tasks/abc355_b)

$A$ と $B$ を結合して、ソートする。隣り合う要素が共に $A$ に含まれていれば、`Yes` を出力する。

$A$ に含まれるかどうかの判定は、`map` を使うことで $\mathrm{O}(1)$ で行うことができる。

## 提出コード

```go
func main() {
	var n, m int
	scanIntVariables(&n, &m)
	A := readInts()
	B := readInts()
	C := make([]int, 0)
	isA := make(map[int]bool)

	for i := 0; i < n; i++ {
		isA[A[i]] = true
		C = append(C, A[i])
	}
	for i := 0; i < m; i++ {
		C = append(C, B[i])
	}

	sort.Slice(C, func(i, j int) bool {
		return C[i] < C[j]
	})

	for i := 0; i < n+m-1; i++ {
		if isA[C[i]] && isA[C[i+1]] {
			writeLine("Yes")
			return
		}
	}
	writeLine("No")
}
```
