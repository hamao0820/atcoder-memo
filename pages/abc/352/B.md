---
title: B - Typing
tags:
---

# B - Typing

## 解説

[問題](https://atcoder.jp/contests/abc352/tasks/abc352_b)

`S` の何文字目までをタイプしたかを持っておき、`T` についてループするループして確かめる。

一列に出力するために、`A` に格納しておいて、最後に出力する。

## 提出コード

```go
func main() {
	s := readString()
	t := readString()
	A := make([]int, len(s))
	i := 0
	for j := 0; j < len(t); j++ {
		if s[i] == t[j] {
			A[i] = j + 1
			i++
		}
	}
	for i := 0; i < len(s); i++ {
		write(A[i], " ")
	}
	writeLine()
}
```
