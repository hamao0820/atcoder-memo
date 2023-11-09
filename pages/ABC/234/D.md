---
title: D - Prefix K-th Max
tags:
  - heap
  - TLE
---

# ABC234 D - Prefix K-th Max

## キーワード

- heap
- TLE

## 解説

[問題](https://atcoder.jp/contests/abc234/tasks/abc234_d)

[提出](https://atcoder.jp/contests/abc234/submissions/43263266)

問題自体は簡単。TSTL を使うと TLE になるため、自前のクラスを使う必要がある。

```ts
class PriorityQueue<T = number> {
    private data: T[] = Array(1);
    private tail = 1;
    private compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this.compare = compare;
    }

    get length() {
        return this.tail - 1;
    }
    isEmpty() {
        return this.tail === 1;
    }

    push(elem: T) {
        if (this.data.length <= this.tail) {
            this.data.push(elem);
        } else {
            this.data[this.tail] = elem;
        }
        let i = this.tail;
        let p = Math.floor(i / 2);
        this.tail++;
        while (i > 1 && this.compare(this.data[p], elem) > 0) {
            this.data[i] = this.data[p];
            i = p;
            p = Math.floor(i / 2);
        }
        this.data[i] = elem;
    }

    top() {
        return this.tail === 1 ? undefined : this.data[1];
    }

    pop() {
        if (this.tail === 1) return undefined;

        const top = this.data[1];
        this.data[1] = this.data[this.tail - 1];
        this.data[this.tail - 1] = undefined as any;
        this.tail--;
        this.maxHeapify(1);
        return top;
    }

    private maxHeapify(i: number) {
        const left = Math.floor(i * 2);
        const right = left + 1;

        let largest = i;
        if (left < this.tail && this.compare(this.data[i], this.data[left]) > 0) {
            largest = left;
        }
        if (right < this.tail && this.compare(this.data[largest], this.data[right]) > 0) {
            largest = right;
        }

        if (largest !== i) {
            [this.data[i], this.data[largest]] = [this.data[largest], this.data[i]];
            this.maxHeapify(largest);
        }
    }
}
```
