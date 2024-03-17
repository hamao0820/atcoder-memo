---
title: B - Integer Division Returns
tags:
---

# B - Integer Division Returns

## キーワード

## 解説

[問題](https://atcoder.jp/contests/abc345/tasks/abc345_b)

$$
\lceil \frac{a}{b} \rceil = \
\begin{cases}
\frac{a+b-1}{b} & \text{if } a  \geq 0 \\
\frac{a}{b} & \text{if } a < 0
\end{cases}
$$

だだし, ここでの割り算は割り切りを行うものとする。

ちなみに、切り捨ては

$$
\lfloor \frac{a}{b} \rfloor = \frac{a - (((a \mod b) + b) \mod b)}{b}
$$

```go
func ceilDiv(a, b int) int {
	if b < 0 {
		return ceilDiv(-a, -b)
	}
	if a < 0 {
		return a / b
	}
	return (a + b - 1) / b
}

func floorDiv(a, b int) int {
	if b < 0 {
		return floorDiv(-a, -b)
	}
	return (a - (a%b+b)%b) / b
}
```

## 提出コード

```go
func main() {
	x := readInt()
	writeLine(ceilDiv(x,10))
}

func ceilDiv(a, b int) int {
	if b < 0 {
		return ceilDiv(-a, -b)
	}
	if a < 0 {
		return a / b
	}
	return (a + (b - 1)) / b
}
```
