interface BTreeNode<T> {
  data: T;
  idx: number;
}

interface BTreeSeq<T> {
  data: Array<BTreeNode<T>>;
  length: number;
  findKthNode: (index: number) => BTreeNode<T>;
  getParent: (node: BTreeNode<T>) => BTreeNode<T>;
  getChildLeft: (node: BTreeNode<T>) => BTreeNode<T>;
  getChildRight: (node: BTreeNode<T>) => BTreeNode<T>;
  toArray: () => Array<T>;
}

export class BinaryTreeSeq<T> implements BTreeSeq<T> {
  data = [null]; // 第0位用null占位
  length: number;

  constructor(data: Array<T> = []) {
    for (let i = 1; i <= data.length; i++) {
      const node: BTreeNode<T> = {
        data: data[i - 1],
        idx: i,
      }
      this.data.push(node);
    }

    this.length = data.length;
  };

  findKthNode = (index) => {
    if (index > this.length) {
      return null;
    }
    return this.data[index];
  }

  getParent = (index) => {
    const parentIdx = Math.floor(index / 2);
    return this.findKthNode(parentIdx);
  }

  getChildLeft = (index) => {
    const childLeftIdx = index * 2;
    return this.findKthNode(childLeftIdx);
  }

  getChildRight = (index) => {
    const childRightIdx = index * 2 + 1;
    return this.findKthNode(childRightIdx);
  }

  toArray = () => {
    const arr = this.data.slice(1).map(i => i.data);
    return arr;
  }
};
