---
title: B - AtCoder Janken 2
tags:
---

# B - AtCoder Janken 2

## 解説

[問題](https://atcoder.jp/contests/abc354/tasks/abc354_b)

ユーザー名の辞書順に $0,1,\dots,N-1$ の番号を振り当てるのは、配列に入れてソートすれば良い。そのインデックが、番号に対応する。

Cの合計を求めて、その合計を $N$ で割った余りを求めて、その余り番目の文字列を出力するだけ。

## 提出コード

```go
func main() {
	n := readInt()
	S := make([]string, n)
	sum_ := 0
	for i := 0; i < n; i++ {
		var s, c_ string
		scanStringVariables(&s, &c_)
		c, _ := strconv.Atoi(c_)
		S[i] = s
		sum_ += c
	}
	sort.Slice(S, func(i, j int) bool {
		return S[i] < S[j]
	})
	writeLine(S[sum_%n])
}
```
