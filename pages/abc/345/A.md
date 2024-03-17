---
title: A - Leftrightarrow
tags:
---

# A - Leftrightarrow

## キーワード

## 解説

[問題](https://atcoder.jp/contests/abc345/tasks/abc345_a)

実際にチェックするだけ。真ん中の`=`は for 文で回してもいいし、`strings.Count`で $n-2$ 個になるかどうかをチェックしてもいい。

正規表現 `^<=+>$` でチェックすることもできる。

## 提出コード

```go
func main() {
	s := readString()
	n := len(s)
	if s[0:1] != "<" {
		writeLine("No")
		return
	}
	if s[n-1:n] != ">" {
		writeLine("No")
		return
	}
	for i := 1; i < n-1; i++ {
		if s[i:i+1] != "="{
			writeLine("No")
			return
		}
	}
	writeLine("Yes")
}
```

```go
func main() {
	s := readString()
	n := len(s)
	if s[0:1] != "<" {
		writeLine("No")
		return
	}
	if s[n-1:n] != ">" {
		writeLine("No")
		return
	}
	if strings.Count(s[1:n-1], "=") != n-2 {
		writeLine("No")
		return
	}
	writeLine("Yes")
}
```

```go
func main() {
	s := readString()
	pattern := `^<=+>$`
	re, err := regexp.Compile(pattern)
	if err != nil {
		writeLine("No")
		return
	}
	if !re.MatchString(s) {
		writeLine("No")
		return
	}
	writeLine("Yes")
}
```
