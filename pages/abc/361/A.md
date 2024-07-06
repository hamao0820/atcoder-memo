---
title: A - Insert
tags:
---

# A - Insert

## 解説

[問題](https://atcoder.jp/contests/abc361/tasks/abc361_a)

順番に見ていって、 $i = k-1$ のときだけ $x$ も出力すれば良い。

## 提出コード

- Go

```go
func main() {
	var n, k, x int
	scanIntVariables(&n, &k, &x)
	A := readInts()
	for i := 0; i < n; i++ {
		write(A[i], " ")
		if i == k -1 {
			write(x, " ")
		}
	}
	writeLine()
}
```

- C++

```cpp
int main() {
    int n,k,x; cin >> n >> k >> x;
    rep(i,0,n) {
        int a; cin >> a;
        cout << a << " ";
        if (i == k-1) cout << x << " ";
    }
    cout << endl;
}
```
