---
title: B - Ticket Counter
tags:
---

# B - Ticket Counter

## 解説

[問題](https://atcoder.jp/contests/abc358/tasks/abc358_b)

現在の時刻を $t$ としてもっておく。$t=1,2,\dots,n$ に対して、次が成立する。

- $t \ge T_i$ : $i$ 番目のお客さんはすぐに買い物ができる。
- $t < T_i$ : $i$ 番目のお客さんは $T_i$ まで待たなければならない。

$i$ 番目のお客さんが買い物を開始できる時刻は、$\mathrm{max}\{t, T_i\}$ と表される。
いずれの場合も、$a$ かかるので、$i$ 番目のお客さんが買い物を終える時刻は $\mathrm{max}\{t, T_i\} + a$ となる。

このように $t$ を更新していくと、前の客が並んでいるかどうかは考慮しなくてもよい。

## 提出コード

- Go

```go
func main() {
	var n, a int
	scanIntVariables(&n, &a)
	T := readInts()
	t := 0
	for i := 0; i < n; i++ {
		t = max(t, T[i]) + a
		writeLine(t)
	}
}
```

- C++

```cpp
int main() {
    ll n, a; cin >> n >> a;
    vector<ll>T(n); rep(i, 0, n) cin >> T[i];
    ll t = 0;
    rep(i,0,n){
        t = max(t, T[i]) + a;
        cout << t << endl;
    }
}
```
