---
title: B - Inverse Prefix Sum
tags:
  - 数列
---

# ABC280 B - Inverse Prefix Sum

## キーワード

- 数列

## 解説

$$
a_1 = S_1 \\
a_n = S_n - S_{n-1} (n \ge 2)
$$

後ろから代入する際に, `index`を間違わないように注意  
`ans[0] = S[0]`を忘れないようにする

提出コード

```go
func main() {
	var n int
	scanIntVariables(&n)
	S := readInts()

	ans := make([]int, n)

	for i := 1; i < n; i++ {
		ans[n-i] = S[n-i] - S[n-i-1]
	}
	ans[0] = S[0]

	for i := 0; i < n; i++ {
		write(ans[i])
		if i < n-1 {
			write(" ")
		}
	}
}
```
