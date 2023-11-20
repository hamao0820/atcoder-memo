---
title: B - 11/11
tags:
  - 集合
---

# B - 11/11

## キーワード

- 集合

## 解説

[問題](https://atcoder.jp/contests/abc328/tasks/abc328_b)

- $1 \le N \le 100$
- $1 \le D_i \le 100 \quad (1 \le i \le N)$

の制約から全探索( $\mathrm{O}(10^4)$ )で ok.

同じ文字を判定する時は, 1 文字ずつ`set`に入れて, サイズが $1$ かどうかを判定する.

go で文字列の $i$ 文字目を取得すると, `rune`型が返されることに注意.

```go
str[0] // rune型
string(str[0]) // string型
```

## 提出コード

```go
func main() {
	n := readInt()

	D := readInts()

	ans := 0

	for i := 1; i <= n; i++ {
		set := map[string]struct{}{}
		strI := fmt.Sprint(i)
		for j := 0; j < len(strI); j++ {
			set[string(strI[j])] = struct{}{}
		}
		if len(set) != 1 {
			continue
		}
		for j := 1; j <= D[i-1]; j++ {
			strJ := fmt.Sprint(j)
			set := map[string]struct{}{}
			set[string(strI[0])] = struct{}{}
			for k := 0; k < len(strJ); k++ {
				set[string(strJ[k])] = struct{}{}
			}

			if len(set) == 1 {
				ans++
			}
		}
	}

	writeLine(ans)
}
```
