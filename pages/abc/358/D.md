---
title: D - Souvenirs
tags:
---

# D - Souvenirs

## 解説

[問題](https://atcoder.jp/contests/abc358/tasks/abc358_d)

各 $B_j$ について、$A_i \ge B_j$ なる最小の $A_i$ を見つけるという問題。

`lower_bound` などを用いてもよいが、同じ $i$ は複数使えないという制約があるので、
$A$ と $B$ をソートして、$i=1,2,\dots,n$ に対して、$A_i >= B_j$ であれば $A_i$ を使い、$j$ を $1$ 増やすという貪欲法で解くことができる。

条件を満たすかどうかは、$j$ が $m$ になったかどうかで判定できる。

## 提出コード

- Go

```go
func main() {
	var n, m int
	scanIntVariables(&n, &m)
	A := readInts()
	B := readInts()
	sort.Slice(A, func(i, j int) bool {
		return A[i] < A[j]
	})
	sort.Slice(B, func(i, j int) bool {
		return B[i] < B[j]
	})

	ans := 0
	j := 0
	for i := 0; i < n; i++ {
		if j >= m {
			break
		}
		if A[i] >= B[j] {
			j++
			ans += A[i]
			continue
		}
	}
	if j == m {
		writeLine(ans)
	} else {
		writeLine(-1)
	}
}
```

- C++

```cpp
int main() {
    ll n, m; cin >> n >> m;
    vector<ll> A(n), B(m);
    rep(i, 0, n) cin >> A[i];
    rep(i, 0, m) cin >> B[i];

    sort(A.begin(), A.end());
    sort(B.begin(), B.end());

    ll ans = 0, j = 0;
    rep(i,0,n) {
        if (j == m) break;
        if (A[i] >= B[j]) {
            ans += A[i];
            j++;
        }
    }

    cout << (j == m ? ans: -1) << endl;
}
```
