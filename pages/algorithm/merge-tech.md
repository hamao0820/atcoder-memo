---
title: マージテク
tags:
  - マージテク
  - set
---

# マージテク

## キーワード

- マージテク
- set

## 概要

set の union を取る際の工夫.

集合を併合する場合, 小さい方を大きい方にマージする.

## 計算量

$\mathrm{O}(\log{N})$ (そのままだと最悪 $\mathrm{O}(N^2)$ )

## 実装

```go
import (
    "github.com/liyue201/gostl/ds/set"
	"github.com/liyue201/gostl/utils/comparator"
)

func main() {
    s1 := set.New(comparator.IntComparator)
    s2 := set.New(comparator.IntComparator)
    for (i := 0;i<10;i++) {
        s1.Insert((i - 1)*(i + 2))
        s2.Insert(i*(i - 3)*(i + 2))
    }

    union := set.New(comparator.IntComparator)
    if s1.Size() < s2.Size() {
        for iter := s1.Begin(); iter.IsValid(); iter.Next() {
				s2.Insert(iter.Value())
		}
        union = s2
    } else {
        for iter := s2.Begin(); iter.IsValid(); iter.Next() {
				s1.Insert(iter.Value())
		}
        union = s1
    }
}
```

## 例題

- [ABC329 F - Colored Ball](https://atcoder.jp/contests/abc329)

## 引用

- https://scrapbox.io/pocala-kyopro/マージテク
- https://blog.hamayanhamayan.com/entry/2017/02/10/132728
- https://kopricky.github.io/code/DataStructure_Basic/merge_tech.html
- https://www.mathenachia.blog/mergetech-and-logn/
