---
title: A - Exponential Plant
tags:
---

# A - Exponential Plant

## 解説

[問題](https://atcoder.jp/contests/abc354/tasks/abc354_a)

2のべき乗の和がHを超えるまでの個数を求めるだけ。

## 提出コード

```go
func main() {
	h := readInt()
	ans := 0
	tmp := 0
	for i := 0; ; i++ {
		tmp += pow(2, i)
		ans++
		if tmp > h {
			break
		}
	}
	writeLine(ans)
}
```
