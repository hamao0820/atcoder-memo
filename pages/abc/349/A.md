---
title: A - Zero Sum Game
tags:
---

# A - Zero Sum Game

## 解説

[問題](https://atcoder.jp/contests/abc349/tasks/abc349_a)

合計は $0$ になるので、人 $1 ~ N-1$ の合計に $-1$ をかけたものが答え。

## 提出コード

```go
func main() {
	readInt()
	A := readInts()
	writeLine(-sum(A...))
}
```
