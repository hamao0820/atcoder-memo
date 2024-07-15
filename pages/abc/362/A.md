---
title: A - Buy a Pen
tags:
---

# A - Buy a Pen

## 解説

[問題](https://atcoder.jp/contests/abc362/tasks/abc362_a)

`if`文で場合分けするだけ。`switch`文を使うと綺麗に書ける。

## 提出コード

- Go

```go
func main() {
	var r, g, b int
	scanIntVariables(&r, &g, &b)
	c := readString()

	switch c {
	case "Red":
		writeLine(min(g, b))
	case "Green":
		writeLine(min(r, b))
	case "Blue":
		writeLine(min(r, g))
	}
}
```

- C++

```cpp
int main() {
    int r,g,b; cin >> r >> g >> b;
    string c; cin >> c;
    if (c == "Red") {
        cout << min(g,b) << endl;
    } else if (c == "Green") {
        cout << min(r,b) << endl;
    } else {
        cout << min(r,g) << endl;
    }
}
```
