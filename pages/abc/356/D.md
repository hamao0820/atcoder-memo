---
title: D - Masked Popcount
tags:
---

# D - Masked Popcount

## 解説

[問題](https://atcoder.jp/contests/abc356/tasks/abc356_d)

次のように式変形をしていく。

$$
\begin{aligned}
\sum_{k=0}^{N}\mathrm{popcount}(k \& M) &= \sum_{k=0}^{N}((k \& M)\text{にて立っているbitの個数})\\
&= \sum_{k=0}^{N}\sum_{j=0}^\infty((k \& M)\text{にて}j\text{bit目が立っていれば}1, \text{そうでなければ}0)\\
&= \sum_{j=0}^\infty\sum_{k=0}^{N}((k \& M)\text{にて}j\text{bit目が立っていれば}1, \text{そうでなければ}0)\\
\end{aligned}
$$

ここで、$M$ は定数から、次が言える。

- もし $M$ の $j$ bit 目が立っていなければ、常に $0$
- もし $M$ の $j$ bit 目が立っていなければ
  - $k$ の $j$ bit 目が立っているとき、$1$
  - $k$ の $j$ bit 目が立っていないとき、$0$

また、制約条件から、$M$ の $60$ bit 目以降はすべて $0$ であることがわかる。

したがって、 $j = 0,1,\dots,59$ に対して、以下を繰り返す。

- $M$ の $j$ bit 目が立っているとき、$0$ から $N$ までの $k$ に対して、$j$ bit 目が立っているものの個数を求める
- $M$ の $j$ bit 目が立っていないときはなにもしない

つまり、問題文は次のように言い換えられる。

> $0$ 以上 $N$ 以下の整数 $k$ に対して、$k$ の $j$ bit 目が立っているものの個数を求めよ。

これを　$j=0,1,\dots,59$ に対して求め、その総和を求めることで解ける。

次の事実を用いることで、上の問題を解くことができる。

> $k$ を非負整数としたとき、 $0$ 以上 $k\times2^{j+1}$ 未満の整数のうち、
> $j$ bit 目が立っているものの個数は、 $k\times2^j$ 個

また、次も言える。

> $k$ を非負整数、 $l$ を $2^{j+1}$ 未満の整数としたとき、$k\times2^{j+1}$ 以上 $k\times2^{j+1}+l$ 未満の整数のうち、
> $j$ bit 目が立っているものの個数は、 $\mathrm{max}\{0,l-2^j+1\}$ 個

この二つを合わせて、 $0$ 以上 $N$ 未満の整数のうち、$j$ bit 目が立っているものの個数を求めることができる。

## 提出コード

- Go

```go
const MOD = 998244353

func f(j int, n int) int {
	p2 := 1 << uint(j)
	k := n / (2 * p2)
	res := k * p2
	l := n % (2 * p2)
	res += max(0, l-p2+1)
	return res
}

func main() {
	var n, m int
	scanIntVariables(&n, &m)
	ans := 0
	for j := 0; j < 60; j++ {
		if 1 & (m>>uint(j)) == 1 {
			ans += f(j, n)
			ans %= MOD
		}
	}
	writeLine(ans)
}
```

- C++

```cpp
#define MOD 998244353

ll f(ll j, ll n) {
    ll p2=(1ll<<j);
    ll k=n/(2*p2);
    ll res=k*p2;
    ll l=n%(2*p2);
    res += max(0ll, l-p2+1);
    return res;
}

int main() {
    ll n, m; cin >> n >> m;
    ll ans = 0;
    rep(j, 0, 60) {
        if((m>>j)&1) {
            ans += f(j, n);
            ans %= MOD;
        }
    }
    cout << ans << endl;
}
```
