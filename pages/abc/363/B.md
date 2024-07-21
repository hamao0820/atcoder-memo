---
title: B - Japanese Cursed Doll
tags:
---

# B - Japanese Cursed Doll

## 解説

[問題](https://atcoder.jp/contests/abc363/tasks/abc363_b)

髪の長さが $T$ 以上の人が $P$ 人以上になるのは、最初の長さが $P$ 番目に長い人の髪の長さが $T$ 以上になるとき。

$P$ 番目の人の最初の長さを $l$ とすると、 $l$ が $T$ 以上の場合は $0$ を出力し、そうでない場合は $T-l$ を出力する。`if`文で場合分しても良いが、`max`関数を使うと簡潔に書ける。

C++は`sort`関数の第三引数に`greater<int>()`を渡すと降順にソートできる。

## 提出コード

- Go

```go
func main() {
	var n, t, p int
	scanIntVariables(&n, &t, &p)
	L := readInts()
	sort.Slice(L, func(i, j int) bool {
		return L[i] > L[j]
	})
	writeLine(max(0, t-L[p-1]))
}
```

- C++

```cpp
int main() {
    int n, t, p; cin >> n >> t >> p;
    vector<int> L(n); rep(i, 0, n) cin >> L[i];
    sort(L.begin(), L.end(), greater<int>());
    cout << max(0, t - L[p - 1]) << endl;
}
```
