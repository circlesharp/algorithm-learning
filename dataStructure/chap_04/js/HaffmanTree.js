const { MinHeap } = require('./heap');

class HuffmanifyMinHeap extends MinHeap {
  constructor(...e) {
    super(...e)
  }
  _compare(a, b) {
    return a.weight < b.weight;
  }
}

class HuffmanTree {
  constructor(left, right) {
    if (!right) {
      this.left = null;
      this.right = null;
      this.weight = left.weight;
    }
    else {
      this.left = left;
      this.right = right;
      this.weight = left.weight + right.weight;
    }
  }

  /* item[]; item: { weight, data } */
  static build(arr) {
    /* 1 根据权重处理成堆 */
  }
}

const test = () => {
  const rawData = [];
  for (let i = 0; i < 10; i++) {
    rawData.push({ weight: i, data: i * 10 });
  }
  const heap = new HuffmanifyMinHeap(rawData);
  heap.print(i => i.data);
};

test();
