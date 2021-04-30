import { QueueLink } from '../chap_3/Queue';

type BTreeNodeSeq<T> = {
  data: T;
  idx: number;
}

class BTreeNodeLink<T> {
  data: T;
  left: BTreeNodeLink<T> = null;
  right: BTreeNodeLink<T> = null;

  constructor(data: T) {
    this.data = data;
  }
}

type BTreeNode<T> = BTreeNodeSeq<T> | BTreeNodeLink<T>;

interface BTreeSeq<T> {
  data: Array<BTreeNode<T>>;
  length: number;
  findKthNode: (index: number) => BTreeNode<T>;
  getParent: (node: BTreeNode<T>) => BTreeNode<T>;
  getChildLeft: (node: BTreeNode<T>) => BTreeNode<T>;
  getChildRight: (node: BTreeNode<T>) => BTreeNode<T>;
  toArray: () => Array<T>;
}

type traversalType = 'inOrder' | 'preOrder' | 'postOrder' | 'levelOrder';

interface BTreeLink<T> {
  data: BTreeNodeLink<T>;
  isEmpty: () => boolean;
  traversal: (node: BTreeNodeLink<T>, type: traversalType) => void;
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

export class BinaryTreeLink<T> implements BTreeLink<T> {
  data: BTreeNodeLink<T>;

  constructor(data: Array<T> = []) {
    if (!data.length) {
      this.data = null;
      return;
    }

    let queue = new QueueLink([], 100);
    let shouldAddLeft = true;
    let tmpRoot: BTreeNodeLink<T>;

    /* 处理根节点 */
    tmpRoot = new BTreeNodeLink(data[0]);
    this.data = tmpRoot;
    queue.addQ(tmpRoot);

    /* 处理其他节点 */
    for (let i = 1; i < data.length; i++) {
      if (shouldAddLeft) {
        tmpRoot = queue.deleteQ();
      }

      let tmpNode: BTreeNodeLink<T>;
      if (data[i] == null) {
        tmpNode = null;
      } else {
        tmpNode = new BTreeNodeLink(data[i]);
        queue.addQ(tmpNode);
      }

      if (shouldAddLeft) {
        tmpRoot.left = tmpNode;
      } else {
        tmpRoot.right = tmpNode;
      }

      shouldAddLeft = !shouldAddLeft;
    }
  }

  isEmpty = () => {
    return true;
  }

  traversal = (node = this.data, type = 'inOrder') => {
    return [];
  }
}
