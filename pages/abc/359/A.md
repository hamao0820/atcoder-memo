---
title: A - Count Takahashi
tags:
---

# A - Count Takahashi

## 解説

[問題](https://atcoder.jp/contests/abc359/tasks/abc359_a)

ただ入力が "Takahashi" かどうかを判定すれば良い。

## 提出コード

- Go

```go
func main() {
	n := readInt()
	ans := 0
	for i := 0; i < n; i++ {
		s := readString()
		if s == "Takahashi" {
			ans++
		}
	}
	writeLine(ans)
}
```

- C++

```cpp
int main() {
    int n; cin >> n;
    int ans = 0;
    rep(i,0,n) {
        string s; cin >> s;
        if (s == "Takahashi") ans++;
    }
    cout << ans << endl;
}
```
