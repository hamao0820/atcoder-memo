---
title: B - Uppercase and Lowercase
tags:
---

# B - Uppercase and Lowercase

## 解説

[問題](https://atcoder.jp/contests/abc357/tasks/abc357_b)

$S$ の大文字と小文字を数えて、多い方に対応する操作をするだけ。

C++の場合は、`islower` と `isupper` で大文字小文字の判定を行うことができる。

これらの関数と、`tolower` と `toupper` を使う場合は、引数が `string` ではなく `char` であることに注意する。

## 提出コード

- Go

```go
func main() {
	s := readString()
	up := 0
	low := 0
	for i := 0; i < len(s); i++ {
		if 'a' <= s[i] && s[i] <= 'z' {
			low++
		} else {
			up++
		}
	}
	if up > low {
		writeLine(strings.ToUpper(s))
	} else {
		writeLine(strings.ToLower(s))
	}
}
```

- C++

```cpp
int main() {
    string s; cin >> s;
    int lower = 0, upper = 0;
    string ans = "";
    rep(i,0,s.size()) {
        if (islower(s[i])) lower++;
        else upper++;
    }
    if (lower > upper) {
        rep(i,0,s.size()) {
            ans += tolower(s[i]);
        }
    } else {
        rep(i,0,s.size()) {
            ans += toupper(s[i]);
        }
    }
    cout << ans << endl;
}
```
