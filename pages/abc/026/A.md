---
title: A - 掛け算の最大値
tags:
---

# A - 掛け算の最大値

## キーワード

## 解説

[問題](https://atcoder.jp/contests/abc026/tasks/abc026_a)

全探索すれば問題ない。

相加相乗平均の等号成立条件を利用して、`a = b`のときが最大値となる。

$$
\frac{x+y}{2} \geq \sqrt{xy}
$$

であるが、$x+y = A$ (定数)であるため、

$$
A \geq 2\sqrt{xy} \Leftrightarrow \frac{A^2}{4} \geq xy
$$

となり、等号が成立するとき $xy$ は最大値となることがわかる。

## 提出コード

```go
func main() {
	a := readInt()
	writeLine((a / 2) * (a / 2))
}
```
