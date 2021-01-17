const { MinHeap } = require('./Heap');

/* 哈夫曼化最小堆：依据 weight 字段的最小堆 */
class HuffmanifyMinHeap extends MinHeap {
  constructor(...e) {
    super(...e)
  }
  _compare(a, b) {
    return a.weight > b.weight;
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
    const rawData = arr.map(i => new HuffmanTree(i));
    const huffMinHeap = new HuffmanifyMinHeap(rawData);

    /* 2 贪心生成哈夫曼树 */
    for (let i = 0; i < arr.length - 1; i++) {
      const huffNode = new HuffmanTree(huffMinHeap.delete(), huffMinHeap.delete());
      huffMinHeap.insert(huffNode);
    }

    /* 3 返回（就是堆里面唯一的元素） */
    return huffMinHeap.delete();
  }

  print() {
    /* ps 暂且用这个方法，理应继承树的遍历方法 */
    console.log(JSON.stringify(this, null, 2));
  }
}

const test01 = () => {
  const rawData = [];
  for (let i = 1; i <= 10; i++) {
    rawData.push({ weight: i, data: i + 10 });
  }
  const heap = new HuffmanifyMinHeap(rawData);
  heap.print(i => `${i.weight}-${i.data}`);
};

const test02 = () => {
  const rawData = [];
  for (let i = 1; i <= 10; i++) {
    rawData.push({ weight: i, data: i + 10 });
  }
  const huffTree = HuffmanTree.build(rawData);
  huffTree.print();
};

test02();
