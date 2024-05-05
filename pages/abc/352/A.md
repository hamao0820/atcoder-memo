---
title: A - AtCoder Line
tags:
---

# A - AtCoder Line

## 解説

[問題](https://atcoder.jp/contests/abc352/tasks/abc352_a)

$z$ が $x$ と $y$ の間にあるかどうかを判定する問題です。

$x$ と $y$ の大小関係で場合わけをしてもよいが、場合わけが多くなるので、大きい方が $x$ となるように`swap`して、$x < z < y$ を満たすかどうかを判定する。

## 提出コード

```go
func main() {
	var n, x, y, z int
	scanIntVariables(&n, &x, &y, &z)
	if y < x {
		x, y = y, x
	}
	if x < z && z < y {
		writeLine("Yes")
	} else {
		writeLine("No")
	}
}
```
