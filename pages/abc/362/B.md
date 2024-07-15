---
title: B - Right Triangle
tags:
---

# B - Right Triangle

## 解説

[問題](https://atcoder.jp/contests/abc362/tasks/abc362_b)

$3$ 頂点の座標から、二つのベクトルを作り、その内積が $0$ になるかどうかを調べる。

ベクトルの選び方の $3$ 通りあるが、配列に入れることで`for`文を使って綺麗に書ける。

## 提出コード

- Go

```go
func main() {
	P := make([][2]int, 3)
	for i := 0; i < 3; i++ {
		var x, y int
		scanIntVariables(&x, &y)
		P[i] = [2]int{x, y}
	}
	for i := 0; i < 3; i++ {
		x1 := P[i][0] - P[(i+1)%3][0]
		y1 := P[i][1] - P[(i+1)%3][1]
		x2 := P[i][0] - P[(i+2)%3][0]
		y2 := P[i][1] - P[(i+2)%3][1]
		if x1*x2 + y1*y2 == 0 {
			writeLine("Yes")
			return
		}
	}
	writeLine("No")
}
```

- C++

```cpp
int main() {
    vector<pair<int,int>> P(3);
    rep(i,0,3) cin >> P[i].first >> P[i].second;
    for (int i = 0; i < 3; i++) {
        int x1 = P[i].first-P[(i+1)%3].first, y1 = P[i].second-P[(i+1)%3].second;
        int x2 = P[i].first-P[(i+2)%3].first, y2 = P[i].second-P[(i+2)%3].second;
        if (x1*x2 + y1*y2 == 0) {
            cout << "Yes" << endl;
            return 0;
        }
    }
    cout << "No" << endl;
}
```
