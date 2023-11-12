---
title: D - Take ABC
tags:
  - stack
  - スタック
---

# D - Take ABC

## キーワード

- stack
- スタック

## 解説

[問題](https://atcoder.jp/contests/abc328/tasks/abc328_d)

1 文字ずつ`stack`にいれていき, 先頭 3 文字を確認して"ABC"であればその文字を`stack`から消す操作を繰り返せば良い.

go の場合は, ただの配列を stack として扱うことが可能. (slicing の計算量は $\mathrm{O}(1)$ ?)

[Go 言語: スライスの構造](https://qiita.com/nozmiz/items/231e76506b51f7f5b810)

## 提出コード

```go
func main() {
	S := readString()

	stack := []string{}

	for _, s := range S {
		stack = append(stack, string(s))

		l := len(stack)
		if l < 3 {
			continue
		}

		if stack[l-3] == "A" && stack[l-2] == "B" && stack[l-1] == "C" {
			stack = stack[:l-3]
		}
	}

	for _, s := range stack {
		write(s)
	}
}
```
