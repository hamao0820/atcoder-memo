---
title: A - Sanitize Hands
tags:
---

# A - Sanitize Hands

## 解説

[問題](https://atcoder.jp/contests/abc357/tasks/abc357_a)

$i$ 人目の宇宙人が消毒するたびに、 $H_i$ ずつ消毒液を消費する。

$M$ から $H_i$ を引いたものが $0$ 以上のものがあれば、その人は消毒できるため、答えの人数を増やす。

## 提出コード

- Go

```go
func main() {
	var n, m int
	scanIntVariables(&n, &m)
	H := readInts()
	ans := 0
	for i := 0; i < n; i++ {
		m -= H[i]
		if m < 0 {
			break
		}
		ans++
	}
	writeLine(ans)
}
```

- C++

```cpp
int main() {
    int n, m; cin >> n >> m;
    int ans = 0;
    rep(i,0,n){
        int h; cin >> h;
        m -= h;
        if (m < 0) break;
        ans++;
    }
    cout << ans << endl;
}
```
