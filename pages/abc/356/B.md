---
title: B - Nutrients
tags:
---

# B - Nutrients

## 解説

[問題](https://atcoder.jp/contests/abc356/tasks/abc356_b)

それぞれの栄養素について、条件を満たすかどうかを判定するだけ。

それぞれの料理の栄養をもつ 2 重配列を作っても良いが、
$i = 1,2,\dots,n$ について、$A_j \leftarrow A_j - M_{i,j}$ としていき、
最後に $A_j \leq 0$ であるかどうかを判定すれば、メモリ容量を抑えられる。

## 提出コード

- Go

```go main.go
func main() {
	var n, m int
	scanIntVariables(&n, &m)
	A := readInts()
	for i := 0; i<n;i++ {
		X := readInts()
		for j, x := range X {
			A[j] -= x
		}
	}
	for _, a := range A {
		if a > 0 {
			writeLine("No")
			return
		}
	}
	writeLine("Yes")
}
```

- C++

```cpp 
int main() {
    int n,m;cin >> n >> m;
    vector<int> A(m); rep(i,0,m) cin >> A[i];
    rep(i,0,n) {
        rep(j, 0, m) {
            int x; cin >> x;
            A.at(j) -= x;
        }
    }
    rep(i,0,m) {
        if (A.at(i) > 0) {
            cout << "No" << endl;
            return 0;
        }
    }
    cout << "Yes" << endl;
}
```
