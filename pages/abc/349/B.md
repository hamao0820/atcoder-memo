---
title: B - Commencement
tags:
---

# B - Commencement

## 解説

[問題](https://atcoder.jp/contests/abc349/tasks/abc349_b)

全ての文字について出現する回数を調べ、すべての文字について出現回数が $0$ か $2$ であれば Yes そうでなければ No とする。

## 提出コード

```go
func main() {
	s := readString()
	ma := make(map[rune]int)
	for _, c := range s {
		ma[c]++
	}
	C := make([]int, len(s)+1)
	for _, v := range ma {
		C[v]++
	}
	for i := 1; i < len(C); i++ {
		if C[i] == 0 || C[i] == 2 {
			continue
		}
		writeLine("No")
		return
	}

	writeLine("Yes")
}
```
