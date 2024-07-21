---
title: E - Sinking Land
tags:
---

# E - Sinking Land

## 解説

[問題](https://atcoder.jp/contests/abc363/tasks/abc363_e)

沈むマスは、海または海に沈んでいるマスに隣接しているかつ、海より低いマスである。

海に面しているマスのうち、高さが最も低いマスから順に、そのマスが沈むかどうかを判定していけばよいので、優先度付きキューを使う。

最初は海に面しているマスを優先度付きキューに入れ、高さが最も低いマスから順に取り出していく。

取り出したマスが沈むマスであれば、そのマスに隣接するマスを優先度付きキューに入れる。

各 $i$ に対して、優先度付きキューから取り出せるだけ取り出して、沈むマスの数を出力する。

計算量は $O(HW \log{HW})$ である。

## 提出コード

- Go

```go
func main() {
	var h, w, y int
	scanIntVariables(&h, &w, &y)
	A := make([][]int, h)
	for i := 0; i < h; i++ {
		A[i] = readInts()
	}
	que := priorityqueue.New[[2]int](func(a, b [2]int) int {
		return a[0] - b[0]
	})
	pushed := make([]bool, h*w)
	for i := 0; i < h; i++ {
		for j := 0; j < w; j++ {
			if i == 0 || i == h-1 || j == 0 || j == w-1 {
				que.Push([2]int{A[i][j], i*w + j})
				pushed[i*w+j] = true
			}
		}
	}
	ans := h * w
	for i := 1; i <= y; i++ {
		for !que.Empty() && que.Top()[0] <= i {
			u := que.Pop()[1]
			ans--
			x, y := u/w, u%w
			for _, d := range [][2]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}} {
				nx, ny := x+d[0], y+d[1]
				if nx < 0 || nx >= h || ny < 0 || ny >= w {
					continue
				}
				if !pushed[nx*w+ny] {
					que.Push([2]int{A[nx][ny], nx*w + ny})
					pushed[nx*w+ny] = true
				}
			}
		}
		writeLine(ans)
	}
}
```

- C++

```cpp
int main() {
    int h,w,y; cin >> h >> w >> y;
    vector<vector<int>> H(h, vector<int>(w));
    rep(i, 0, h) rep(j, 0, w) cin >> H[i][j];
    priority_queue<pair<ll, int>, vector<pair<ll,int>>, greater<pair<ll,int>>> pq;
    vector<bool> pushed(h*w,false);
    rep(i,0,h) rep(j,0,w) if (i == 0 || i == h-1 || j == 0 || j == w-1) {
        pq.push({H[i][j], i*w+j});
        pushed[i*w+j] = true;
    };
    int ans = h*w;
    int dx[4] = {0,0,1,-1};
    int dy[4] = {1,-1,0,0};
    rep(i,1,y+1) {
        while(!pq.empty() && pq.top().first <= i) {
            int u = pq.top().second; pq.pop();
            pushed[u] = true;
            ans--;
            int x = u / w, y = u % w;
            rep(j,0,4) {
                int nx = x + dx[j], ny = y + dy[j];
                if (nx < 0 || nx >= h || ny < 0 || ny >= w) continue;
                if (!pushed[nx*w+ny]) {
                    pq.push({H[nx][ny], nx*w+ny});
                    pushed[nx*w+ny] = true;
                }
            }
        }
        cout << ans << endl;
    }
}
```
