---
title: C - One Time Swap
tags:
---

# C - One Time Swap

## キーワード

## 解説

[問題](https://atcoder.jp/contests/abc345/tasks/abc345_c)

場所を無視して交換可能なアルファベットの数を数える。

あるいは、すべての組み合わせから、同じ文字を交換する組み合わせを引く。

いずれの場合も、あるアルファベットが存在して二個以上含まれる場合は、与えられた `S` をそのまま使うことができるため、その場合は `+1` する。

## 提出コード

```go
func main() {
	s := readString()
	n := len(s)
	m := make(map[byte]int)
	for i := 0; i < n; i++ {
		m[s[i]]++
	}
	ans := 0
	for _, v := range m {
		if v >= 2 {
			ans += 1
			break
		}
	}
	for i := 0; i < 26; i++ {
		for j := i + 1; j < 26; j++ {
			ans += m[byte('a'+i)] * m[byte('a'+j)]
		}
	}
	writeLine(ans)
}
```

```go
func main() {
	s := readString()
	n := len(s)
	m := make(map[byte]int)
	for i := 0; i < n; i++ {
		m[s[i]]++
	}
	ans := n * (n - 1) / 2
	for _, v := range m {
		if v >= 2 {
			ans += 1
			break
		}
	}
	for _, v := range m {
		ans -= v * (v - 1) / 2
	}
	writeLine(ans)
}
```
