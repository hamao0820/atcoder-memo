---
title: C - Move It
tags:
---

# C - Move It


## 解説

[問題](https://atcoder.jp/contests/abc360/tasks/abc360_c)

全ての箱に一つずつ入っている状態にすれば良いため、複数の荷物が入っている箱から一つを残して空箱に移せば良い。

コストを最小にするためには、その箱に入っている荷物の中で最も重いものを残すのが最適である。そこで、各箱の中で最も重い荷物の重さを記録しておき、全ての箱の重さの合計から最も重い荷物の重さの合計を引けば答えとなる。

## 提出コード

- Go

```go
func main() {
	n := readInt()
	A := readInts()
	W := readInts()
	M := make([]int, n+1)
	for i := 0; i < n; i++ {
		M[A[i]] = max(M[A[i]], W[i])
	}
	writeLine(sum(W...) - sum(M...))
}
```

- C++

```cpp
int main() {
    int n; cin >> n;
    vector<ll> A(n); rep(i, 0, n) cin >> A[i];
    vector<ll> W(n); rep(i, 0, n) cin >> W[i];
    vector<ll> M(n,0);
    rep(i,0,n) M[A[i]-1] = max(M[A[i]-1], W[i]);
    ll ans = 0;
    rep(i,0,n) ans += W[i];
    rep(i,0,n) ans -= M[i];
    cout << ans << endl;
}
```
