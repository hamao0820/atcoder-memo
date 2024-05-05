---
title: C - Standing On The Shoulders
tags:
---

# C - Standing On The Shoulders

## 解説

[問題](https://atcoder.jp/contests/abc352/tasks/abc352_c)

すべての巨人を積み上げた時の地面を基準とした肩の高さは、積み上げる順番によらない。

地面からの頭の高さが最大になるのは、頭の長さが最大の巨人を最後に積み上げたとき。

巨人の頭の長さが最大のものを見つけて、その巨人を最後に積み上げるときの地面からの頭の高さを求める。

## 提出コード

```go
func main() {
	var n int
	scanIntVariables(&n)
	A := make([]int, n)
	B := make([]int, n)
	for i := 0; i < n; i++ {
		scanIntVariables(&A[i], &B[i])
	}
	C := 0
	for i := 0; i < n; i++ {
		C = max(C, B[i]-A[i])
	}

	writeLine(sum(A...) + C)
}
```
