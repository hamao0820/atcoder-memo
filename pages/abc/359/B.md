---
title: B - Couples
tags:
---

# B - Couples

## 解説

[問題](https://atcoder.jp/contests/abc359/editorial)

$i = 0,1,\dots,n-1$ に対して, $A[i] = A[i+2]$ であるような $i$ の個数を数える。

## 提出コード

- Go

```go
func main() {
	n := readInt()
	A := readInts()
	ans := 0
	for i := 0; i < 2*n-2; i++ {
		if A[i] == A[i+2] {
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
    vector<int> A(2*n); rep(i,0,2*n) cin >> A[i];
    int ans = 0;
    rep(i,0,2*n) if (A[i] == A[i+2]) ans++;
    cout << ans << endl;
}
```
