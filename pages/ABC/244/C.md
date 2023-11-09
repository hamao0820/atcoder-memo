---
title: C - Yamanote Line Game
tags:
  - インタラクティブ
---

# ABC244 C - Yamanote Line Game

## キーワード

- インタラクティブ

## 解説

[問題](https://atcoder.jp/contests/abc244/tasks/abc244_c)

[提出](https://atcoder.jp/contests/abc244/submissions/43019790)

インタラクティブの時は普段のテンプレートじゃ解けない。

```ts
import * as rl from "readline";

const main = () => {
  const r = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  r.on("line", (line: string) => {
    // 処理を書く
  });
};
```

最初から受け取りたい入力は、event listener の前に定義しておいて if 文の中で代入するようにする。

```ts
import * as rl from "readline";

const main = () => {
  const r = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let N: number;
  r.on("line", (line: string) => {
    if (!N) {
      N = Number(line);
      return;
    }
    //...
  });
};
```
