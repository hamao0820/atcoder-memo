---
title: B - Intesection of Cuboids
tags:
---

# B - Intesection of Cuboids

## 解説

[問題](https://atcoder.jp/contests/abc361/tasks/abc361_b)

何気に難しい。各次元について共通部分が空集合または一点集合でなければよい。これは、開区間が共通部分を持つことと同値である。

開区間 $(a,b), (c,d)$ が共通部分を持たない条件は $b \leq c$ または $d \leq a$ であるから、共通部分を持つ条件は $b > c$ かつ $d > a$ である。

これを各次元について確認すればよい。

## 提出コード

- Go

```go
func main() {
	ABCDEF := readInts()
	GHIJKL := readInts()

	ok := true
	for i := 0; i < 3; i++ {
		if ABCDEF[i+3] <= GHIJKL[i] || ABCDEF[i] >= GHIJKL[i+3] {
			ok = false
			break
		}
	}
	if ok {
		writeLine("Yes")
		return
	}
	writeLine("No")
}
```

- C++

```cpp
// (a,b)と(c,d)が重なっているかどうか
bool check(int a,int b,int c,int d) {
    return (c < b && a < d);
}

int main() {
    int a,b,c,d,e,f; cin >> a >> b >> c >> d >> e >> f;
    int g,h,i,j,k,l; cin >> g >> h >> i >> j >> k >> l;
    if (check(a,d,g,j) && check(b,e,h,k) && check(c,f,i,l)) cout << "Yes" << endl;
    else cout << "No" << endl;
}

```
