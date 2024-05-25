---
title: A - Who Ate the Cake?
tags:
---

# A - Who Ate the Cake?

## 解説

[問題](https://atcoder.jp/contests/abc355/tasks/abc355_a)

$1,2,3$ を`map`に入れて、$a,b$ を除けば良い。

$a$ と $b$ が同じ場合は、$-1$ を出力する。`len(ma) != 1` で判定してもよい。

## 提出コード

```go
func main() {
	var a, b int
	scanIntVariables(&a, &b)
	if a == b {
		writeLine(-1)
		return
	}

	ma := make(map[int]bool)
	for i := 1; i <= 3; i++ {
		ma[i] = true
	}
	ma[a] = false
	ma[b] = false
	for k, v := range ma {
		if v {
			writeLine(k)
			return
		}
	}
}
```
