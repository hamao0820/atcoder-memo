---
title: A - Subsegment Reverse
tags:
---

# A - Subsegment Reverse

## 解説

[問題](https://atcoder.jp/contests/abc356/tasks/abc356_a)

$1$ から $L-1$ までを出力し、$R$ から $L$ までを出力し、$R+1$ から $N$ までを出力すれば良い。

for 文を使う時は、最後の等号の有無に注意する。

## 提出コード

- Go

```go
func main() {
	var n , l , r int
	scanIntVariables(&n, &l, &r)

	for i := 1;i<l;i++ {
		write(i, " ")
	}
	for i := r;i>=l;i-- {
		write(i, " ")
	}
	for i := r+1;i<=n;i++ {
		write(i, " ")
	}
	writeLine()
}
```

- C++

```cpp
int main() {
    int n,l,r;cin >> n >> l >> r;
    rep(i,1,l) cout << i << " ";
    rrep(i,r,l) cout << i << " ";
    rep(i,r+1,n+1) cout << i << " ";
}
```
