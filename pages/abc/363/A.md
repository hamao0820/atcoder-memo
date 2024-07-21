---
title: A - Piling Up
tags:
---

# A - Piling Up

## 解説

[問題](https://atcoder.jp/contests/abc363/tasks/abc363_a)

実際に`if`文を使って、次の段階までに必要な数を計算してもいいが、100 で割ったあまりを考えると記述量を減らせる。

## 提出コード

- Go

```go
func main() {
	r := readInt()
	writeLine(100-r%100)
}
```

- C++

```cpp
int main() {
    int r; cin >> r;
    cout << 100 - r % 100 << endl;
}
```
