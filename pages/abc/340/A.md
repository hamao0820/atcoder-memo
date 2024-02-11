---
title: A - Arithmetic Progression
tags:
---

# A - Arithmetic Progression

## キーワード

## 解説

[問題](https://atcoder.jp/contests/abc340/tasks/abc340_a)

`A`に`B`になるまで`D`を足し続けるだけ。

## 提出コード

```go
func main() {
	var a, b, d int
	scanIntVariables(&a, &b, &d)
	for a <= b {
		write(a, " ")
		a += d
	}
	writeLine()
}
```
