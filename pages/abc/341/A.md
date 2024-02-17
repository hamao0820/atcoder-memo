---
title: A - Print 341
tags:
---

# A - Print 341

## キーワード

## 解説

[問題](https://atcoder.jp/contests/abc341/tasks/abc341_a)

`for`文を使って `10` を `n` 回出力し、最後に `1` を出力する。

## 提出コード

```go
func main() {
	n := readInt()
	for i := 0; i < n; i++ {
		write("10")
	}
	writeLine("1")
}
```
