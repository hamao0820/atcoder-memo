---
title: C - Sierpinski carpet
tags:
---

# C - Sierpinski carpet

## 解説

[問題](https://atcoder.jp/contests/abc357/tasks/abc357_c)

解説通りに `for` ループで解いてもいいが、規則性を見つけるのが困難なので、再帰関数を使って解いた。

前の文字列を `\n` で分割して、それぞれの行に対して、3 倍の文字列を追加していく。中心の 3 行に対しては、`.`を挟んで追加していく。

C++には `split` 関数がないので、自分で実装したが、もっと簡単な方法がありそう。

## 提出コード

- Go

```go
func main() {
	n := readInt()
	writeLine(solve(n))
}

func solve(n int) string {
	if n == 0 {
		return "#\n"
	}
	pre := solve(n - 1)
	ans := ""
	lines := strings.Split(pre, "\n")
	lines = lines[:len(lines)-1]
	for i := 0; i < len(lines); i++ {
		ans += strings.Repeat(lines[i], 3) + "\n"
	}
	for i := 0; i < len(lines); i++ {
		ans += lines[i] + strings.Repeat(".", len(lines)) + lines[i] + "\n"
	}
	for i := 0; i < len(lines); i++ {
		ans += strings.Repeat(lines[i], 3) + "\n"
	}
	return ans
}
```

- C++

```cpp
vector<string> split(const string &s, const string &delimiter) {
    vector<string> tokens;
    size_t start = 0;
    size_t end = s.find(delimiter);

    while (end != string::npos) {
        tokens.push_back(s.substr(start, end - start));
        start = end + delimiter.length();
        end = s.find(delimiter, start);
    }

    tokens.push_back(s.substr(start));
    return tokens;
}

string solve(int n) {
    if (n == 0) return "#\n";
    string pre = solve(n - 1);
    string ans;
    vector<string> lines = split(pre, "\n");
    lines.pop_back();

    for (const auto& line : lines) {
        rep(i,0,3) ans += line;
        ans += "\n";
    }

    for (const auto& line : lines) ans += line + string(line.length(), '.') + line + "\n";

    for (const auto& line : lines) {
        rep(i,0,3) ans += line;
        ans += "\n";
    }

    return ans;
}

int main() {
    int n; cin >> n;
    cout << solve(n);
}
```
