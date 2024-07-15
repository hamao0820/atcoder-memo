---
title: C - Sum = 0
tags:
---

# C - Sum = 0

## 解説

[問題](https://atcoder.jp/contests/abc362/tasks/abc362_c)

条件を満たすような数列 $X$ が存在する必要十分条件は、

$$
\sum_{i=1}^n{L_i} \le 0 \le \sum_{i=1}^n{R_i}
$$

であること。この条件を満たすとき、数列 $X$ は次のように構成できる。

1. $X_i = L_i ~ (i=1,2,\dots,n)$ で初期化する
1. $s = \sum_{i=1}^n{X_i}$ と置く
1. 各 $i=1,2,\dots,n$ に対して次の操作を行う。
   1. $t = \min\{R_i-L_i, s\}$ と置く
   1. $X_i \leftarrow X_i - t$ で更新する
   1. $s \leftarrow s - t$ で更新する

つまり、最初に $R_i$ で初期化し、総和が $0$ になるように各 $X_i$ を小さくしていく。各 $X_i$ を小さくできる限界は $L_i$ であるため、$R_i-L_i$ と $s$ の小さい方を引くことで、$X_i$ を更新する。

$L_i$ で初期化し、総和が $0$ になるように各 $X_i$ を大きくしていくこともできる。その場合は、$\min\{R_i - L_i, -s\}$ で更新していく。

## 提出コード

- Go

```go
func main() {
	n := readInt()
	L := make([]int, n)
	R := make([]int, n)
	for i := 0; i < n; i++ {
		var l, r int
		scanIntVariables(&l, &r)
		L[i] = l
		R[i] = r
	}
	mi := sum(L...)
	ma := sum(R...)
	if mi > 0 || ma < 0 {
		writeLine("No")
		return
	}

	writeLine("Yes")
	Ans := make([]int, n)
	for i := 0; i < n; i++ {
		Ans[i] = R[i]
		t := min(R[i]-L[i], ma)
		Ans[i] -= t
		ma -= t
	}

	for i := 0; i < n; i++ {
		write(Ans[i], " ")
	}
	writeLine()
}
```

- C++

```cpp
int main() {
    int n; cin >> n;
    vector<ll> L(n), R(n); rep(i, 0, n) cin >> L[i] >> R[i];
    ll mi = 0, ma = 0;
    rep(i, 0, n) {
        mi += L[i];
        ma += R[i];
    }
    if (mi >0 || ma < 0) {
        cout << "No" << endl;
        return 0;
    }

    vector<ll> Ans(n);
    rep(i,0,n) {
        Ans[i] = R[i];
        ll t = min(R[i]-L[i],ma);
        Ans[i] -= t;
        ma -= t;
    }

    cout << "Yes" << endl;
    rep(i,0,n) cout << Ans[i] << " "; cout << endl;
}
```
