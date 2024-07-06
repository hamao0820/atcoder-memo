---
title: A - A Healthy Breakfast
tags:
---

# A - A Healthy Breakfast

## 解説

[問題](https://atcoder.jp/contests/abc360/tasks/abc360_a)

R と M の位置を探して、R の位置が M の位置よりも前にあれば Yes そうでなければ No を出力するだけ。

## 提出コード

- Go

```go
func main() {
	s := readString()
	pos_r := -1
	pos_m := -1
	for i, c := range s {
		if c == 'R' {
			pos_r = i
		}
		if c == 'M' {
			pos_m = i
		}
	}
	if (pos_r <pos_m) {
		writeLine("Yes")
	} else {
		writeLine("No")
	}
}
```

- C++

```cpp
int main() {
    string s; cin >> s;
    int index_r = -1, index_m = -1;
    rep(i, 0, s.size()) {
        if (s[i] == 'R') index_r = i;
        if (s[i] == 'M') index_m = i;
    }
    if (index_r < index_m) cout << "Yes" << endl;
    else cout << "No" << endl;
}
```
