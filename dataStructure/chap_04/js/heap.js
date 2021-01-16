/* 实现堆 */

class Heap {
  constructor(e) {
    if (typeof e === 'number') {
      const maxSize = e;
      this.data = Array(maxSize + 1); // 数据
      this.data[0] = Infinity; // 哨兵
      this.size = 0; // 当前容量
      this.capacity = maxSize; // 最大容量
    }
    if (Array.isArray(e)) {
      this._buildHeap(e, e.length);
    }
  }

  isFull() {
    return this.size === this.capacity;
  }
  isEmpty() {
    return this.size === 0;
  }

  insert(x) {
    if (this.isFull()) {
      console.error('error: the MaxHeap is full.');
      return false;
    }

    this.size += 1;
    let i = this.size; // i: x 的归宿

    for ( ; this._compare(this.data[i / 2 | 0], x); i = i / 2 | 0)
      this.data[i] = this.data[i / 2 | 0];

    this.data[i] = x;
    return true;
  }

  delete() {
    if (this.isEmpty()) {
      console.error('error: the MaxHeap is empty.');
      return null;
    }

    const target = this.data[1];
    const x = this.data[this.size--];
    this._percDown(x, 1);

    return target;
  }

  _buildHeap(rawData, size) {
    this.data = [Infinity, ...rawData];
    this.size = size;
    this.capacity = size;

    for (let i = this.size / 2 | 0; i > 0; i--)
      this._percDown(this.data[i], i);
  }

  /**
   * 下滤，将符合条件的往上提
   * @param {int} x 要处理的 element
   * @param {int} p 要处理的树的根节点的 idx
   */
  _percDown(x, p) {
    let parent, child;
    for (parent = p; parent * 2 <= this.size; parent = child) {
      child = parent * 2;

      /* 如果比兄弟小（有兄弟的前提当然是还没抵达边界），那么兄弟取代他 */
      if (child < this.size && this.data[child] < this.data[child + 1])
        child++;

      if (this._compare(x, this.data[child]))
        this.data[parent] = this.data[child];
      else
        break;
    }
    this.data[parent] = x;
  }

  _compare(a, b) {
    return a < b;
  }

  print() {
    let rst = '';
    let row = 1;
    for (let i = 1; i <= this.size; i++) {
      if (i === 2 ** row) {
        row++;
        rst += '\n';
      }
      rst += `${this.data[i]}  `;
    }

    console.log(`the size is: ${this.size}\n${rst}\n`);
  }
}

class MinHeap extends Heap {
  constructor(e) {
    super(e);
  }
  _compare(a, b) {
    a > b;
  }
}


// ========== 测试 ==========

const test01 = () => {
  const heap = new Heap(10);
  for (let i = 1; i < 10; i++)
    heap.insert(i);

  heap.print();

  heap.delete();
  heap.delete();
  heap.delete();
  heap.print();
};

const test02 = () => {
  const rawData = [];
  for (let i = 1; i < 10; i++)
    rawData.push(i);
  const heap = new Heap(rawData);

  heap.print();

  heap.delete();
  heap.delete();
  heap.delete();
  heap.print();
}
const test03 = () => {
  const heap = new MinHeap(10);
  for (let i = 1; i < 10; i++)
    heap.insert(i);

  heap.print();

  heap.delete();
  heap.delete();
  heap.delete();
  heap.print();
};

const test04 = () => {
  const rawData = [];
  for (let i = 1; i < 10; i++)
    rawData.push(i);
  const heap = new MinHeap(rawData);

  heap.print();

  heap.delete();
  heap.delete();
  heap.delete();
  heap.print();
}

// test01();
// test02();
// test03();
test04();
