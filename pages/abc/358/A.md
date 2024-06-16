---
title: A - Welcome to AtCoder Land
tags:
---

# A - Welcome to AtCoder Land

## 解説

[問題](https://atcoder.jp/contests/abc358/tasks/abc358_a)

ただ 2 文字 $s,t$ が与えられるので, それぞれを比較して "AtCoder" と "Land" に一致するかどうかを判定するだけ。

## 提出コード

- Go

```go
func main() {
	var s, t string
	scanStringVariables(&s, &t)
	if s == "AtCoder" && t == "Land" {
		writeLine("Yes")
	} else {
		writeLine("No")
	}
}
```

- C++

```cpp
int main() {
    string s, t; cin >> s >> t;
    if (s == "AtCoder" && t == "Land") cout << "Yes" << endl;
    else cout << "No" << endl;
}
```
