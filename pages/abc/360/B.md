---
title: B - Vertical Reading
tags:
---

# B - Vertical Reading

## 解説

[問題](https://atcoder.jp/contests/abc360/tasks/abc360_b)

問題文の通りに実装するだけ。

## 提出コード

- Go

```go
func main() {
	var s, t string
	scanStringVariables(&s, &t)
	for w := 1; w < len(s); w++ {
		for c := 0; c < w; c++ {
			T := make([]string, 0, len(s))
			for i := c; i < len(s); i += w {
				T = append(T, s[i:i+1])
			}
			if strings.Join(T, "") == t {
				writeLine("Yes")
				return
			}
		}
	}
	writeLine("No")
}
```

- C++

```cpp
int main() {
    string s,t; cin >> s >> t;
    rep(w,0,s.size()) rep(c,0,w) {
        string now = "";
        for(int i = c; i < s.size(); i += w) now += s[i];
        if (now == t) {
            cout << "Yes" << endl;
            return 0;
        }
    }
    cout << "No" << endl;
}
```
