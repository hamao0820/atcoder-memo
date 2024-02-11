---
title: B - Append
tags:
---

# B - Append

## キーワード

## 解説

[問題](https://atcoder.jp/contests/abc340/tasks/abc340_b)

言われたとおりするだけ。

## 提出コード

```go
func main() {
	q := readInt()
	A := []int{}
	for i := 0; i < q; i++ {
		var t, x int
		scanIntVariables(&t, &x)
		if t == 1 {
			A = append(A, x)
		} else {
			writeLine(A[len(A)-x])
		}
	}
}
```
