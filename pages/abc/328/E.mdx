---
title: E - Modulo MST
tags:
  - UnionFind
  - Combination
---

# E - Modulo MST

## キーワード

- UnionFind
- Combination

## 解説

[問題](https://atcoder.jp/contests/abc328/tasks/abc328_e)

### 単語の説明

単純連結無向グラフとは,

- 単純: 多重辺･自己ループを持たない
- 連結: 任意の二頂点間にパスが存在する
- 無向: 辺に向きを持たない($(u, v)$ と $(v, u)$ を同一視)

を満たすグラフのこと.

グラフの全域木とは,

- 全域部分グラフ: そのグラフの全頂点を含む部分グラフ
- 木: 連結で閉路を持たないグラフ

のこと.

### 解法

グラフが木であるとき, 頂点数を $N$ とすると, 辺の数は $N-1$ となる.  
制約

- $2 \le N \le 8$
- $N-1 \le M \le \frac{N(N-1)}{2}$

より, 最大の場合でも, $\binom{8}{7} = 1,184,040 = \text{O}(10^6)$ .  
全探索が可能.

全探索は[combination](../../library/combination.md)を使用する.

グラフ(頂点の部分とそれらを結ぶ辺の部分)が与えれた時, そのグラフが全域木であるかどうかは[UnionFInd](../../data-structure/union-find.md)を用いれば可能.

#### 全域木のチェック

##### 木であること(閉路を持たない)

同じグループに含まれる二点間を結ぶと, 閉路が完成する. 従って, 連結する前にそれらが所属するグループを調べればよい.

```go
uf.root(u) == uf.root(v)
```

計算量は$\mathrm{O}(1)$ .

##### 全域性

全ての頂点を含むかどうかは, ある一つの頂点に含まれるグループに含まれる頂点数が`N`であるか調べれば良い.

```go
uf.size(1) == N
```

これも計算量は $\mathrm{O}(1)$ .

## 提出コード

```go
func Combinations[T any](iterable []T, r int) [][]T {
	n := len(iterable)

	if n < r {
		return [][]T{}
	}

	var result [][]T
	indices := make([]int, r)
	for i := 0; i < r; i++ {
		indices[i] = i
	}

	for {
		currentCombination := make([]T, r)
		for i, idx := range indices {
			currentCombination[i] = iterable[idx]
		}
		result = append(result, currentCombination)

		var i int
		for i = r - 1; i >= 0; i-- {
			if indices[i] != n-(r-i) {
				break
			}
		}

		if i == -1 {
			break
		}

		indices[i]++
		for j := i + 1; j < r; j++ {
			indices[j] = indices[j-1] + 1
		}
	}

	return result
}
func main() {
	var n, m, k int
	scanIntVariables(&n, &m, &k)

	indices := make([]int, m)
	for i := 0; i < m; i++ {
		indices[i] = i
	}

	uvw := make([][]int, m)
	for i := 0; i < m; i++ {
		uvw[i] = make([]int, 3)
		scanIntVariables(&uvw[i][0], &uvw[i][1], &uvw[i][2])
	}

	ans := 1000000000000000000
	for _, comb := range combinations(indices, n-1) {
		uf := newUnionFind(n)
		now := 0
		ok := true
		for i := 0; i < n-1; i++ {
			u := uvw[comb[i]][0]
			v := uvw[comb[i]][1]
			w := uvw[comb[i]][2]
			if uf.find(u-1) == uf.find(v-1) {
				ok = false
				break
			}
			uf.unite(u-1, v-1)
			now += w
			now %= k
		}
		if !ok {
			continue
		}

		if uf.size(1) == n {
			if now < ans {
				ans = now
			}
		}
	}

	writeLine(ans)
}

type UnionFind struct {
	n    int
	root []int
}

func newUnionFind(n int) UnionFind {
	root := make([]int, n)
	for i := 0; i < n; i++ {
		root[i] = -1
	}
	uf := UnionFind{n: n, root: root}
	return uf
}
func (u *UnionFind) find(x int) int {
	if u.root[x] < 0 {
		return x
	}
	u.root[x] = u.find(u.root[x]) // 再帰で根に直接繋ぎ直す
	return u.root[x]
}
func (u *UnionFind) unite(x, y int) {
	x = u.find(x) // xを根に書き換え
	y = u.find(y) // yを根に書き換え
	if x == y {
		return
	}
	if -u.root[x] < -u.root[y] {
		x, y = y, x
	} // xの集合の要素数の方が大きいようにスワップ
	u.root[x] += u.root[y]
	u.root[y] = x
}
func (u *UnionFind) isSame(x, y int) bool {
	return u.find(x) == u.find(y)
}
func (u *UnionFind) size(x int) int {
	return -u.root[u.find(x)]
}
```
