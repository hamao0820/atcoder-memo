---
title: C - Make Them Narrow
tags:
---

# C - Make Them Narrow

## 解説

[問題](https://atcoder.jp/contests/abc361/tasks/abc361_c)

一番大きいものか小さいものを順に除外していけば良い。

$A$ をソートしておくことで、 $k$ 個除外した後の配列は $A$ の長さ $k$ の部分配列となる。

部分配列の範囲をずらしていき、最小値を更新していくことで最終的な答えが得られる。

一度の更新は定数時間で行える。

## 提出コード

- Go

```go
func main() {
	var n, k int
	scanIntVariables(&n, &k)
	A := readInts()
	sort.Slice(A, func(i, j int) bool {
		return A[i] < A[j]
	})
	ans := math.MaxInt64
	for i := 0; i <= k; i++ {
		ans = min(ans, A[i+n-k-1]-A[i])
	}
	writeLine(ans)
}
```

- C++

```cpp
int main() {
    int n,k; cin >> n >> k;
    vector<ll> A(n); rep(i,0,n) cin >> A[i];
    sort(A.begin(), A.end());
    ll ans = 1e18;
    rep(i,0,k+1) ans = min(ans, A[i+n-k-1]-A[i]);
    cout << ans << endl;
}
```
