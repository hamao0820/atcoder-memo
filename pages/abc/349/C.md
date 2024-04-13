---
title: C - Airport Code
tags:
---

# C - Airport Code

## 解説

[問題](https://atcoder.jp/contests/abc349/tasks/abc349_c)

前から順番に見ていくだけ。3 文字とも一致するか、2 文字目まで一致して 3 文字目が X であれば Yes。

## 提出コード

```go
func main() {
	s := readString()
	t := readString()
	i := 0
	for _, c := range s {
		if strings.ToUpper(string(c)) == t[i:i+1] {
			i++
			if i == 3 {
				break
			}
		}
	}
	if i >= 3 || (i == 2 && t[2] == 'X') {
		writeLine("Yes")
	} else {
		writeLine("No")
	}
}
```
