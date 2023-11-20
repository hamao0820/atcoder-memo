---
title: C - NewFolder(1)
tags:
---

# ABC261 C - NewFolder(1)

## 解説

[問題](https://atcoder.jp/contests/abc261/tasks/abc261_c)

提出コード

```go
func main() {
	var n int
	scanIntVariables(&n)

	m := map[string]int{}

	for i := 0; i < n; i++ {
		s := readString()
		if _, ok := m[s]; !ok {
			writeLine(s)
			m[s] = 0
			continue
		}

		m[s]++
		writeFormat("%s(%d)\n", s, m[s])
	}
}
```

問題自体は何も難しくない.

go で map を使うときは, 以下のように初期化する.

```go
// map[キーの型]値の型
m := map[string]int{}
```

存在しないキーにアクセスすると規定値(int の場合は 0)が返される.  
あるキーのバリューを変更したい際は, 初期化を忘れないように.

```go
m := map[string]int{}

fmt.Println(m["key"]) // 0

m["key"]++

fmt.Println(m["key"]) // 0

m["key"] = 0
m["key"]++
fmt.Println(m["key"]) // 1
```
