import { QueueLink } from '../chap_3/Queue';
import { StackLink } from '../chap_3/Stack';

// ================ type: 定义 node ================
type BTreeNodeSeq<T> = {
  data: T;
  idx: number;
};

export class BTreeNodeLink<T> {
  data: T;
  left: BTreeNodeLink<T> = null;
  right: BTreeNodeLink<T> = null;

  constructor(data: T) {
    this.data = data;
  }
}

type BTreeNode<T> = BTreeNodeSeq<T> | BTreeNodeLink<T>;

type traversalType = 'inOrder' | 'preOrder' | 'postOrder' | 'levelOrder';
type traversalVisitor<T> = (node: BTreeNodeLink<T>) => void;

// ================ type: 定义 tree ================
interface BTreeSeq<T> {
  data: Array<BTreeNode<T>>;
  length: number;
  findKthNode: (index: number) => BTreeNode<T>;
  getParent: (node: BTreeNode<T>) => BTreeNode<T>;
  getChildLeft: (node: BTreeNode<T>) => BTreeNode<T>;
  getChildRight: (node: BTreeNode<T>) => BTreeNode<T>;
  toArray: () => Array<T>;
}

interface BTreeLink<T> {
  root: BTreeNodeLink<T>;
  isEmpty: () => boolean;
  traversal: (type: traversalType) => void;
  getHeight: () => number;
}

// ================ code 二叉树 顺序表实现 ================
export class BinaryTreeSeq<T> implements BTreeSeq<T> {
  data = [null]; // 第0位用null占位
  length: number;

  constructor(data: Array<T> = []) {
    for (let i = 1; i <= data.length; i++) {
      const node: BTreeNode<T> = {
        data: data[i - 1],
        idx: i,
      };
      this.data.push(node);
    }

    this.length = data.length;
  };

  findKthNode = (index) => {
    if (index > this.length) {
      return null;
    }
    return this.data[index];
  };

  getParent = (index) => {
    const parentIdx = Math.floor(index / 2);
    return this.findKthNode(parentIdx);
  };

  getChildLeft = (index) => {
    const childLeftIdx = index * 2;
    return this.findKthNode(childLeftIdx);
  };

  getChildRight = (index) => {
    const childRightIdx = index * 2 + 1;
    return this.findKthNode(childRightIdx);
  };

  toArray = () => {
    const arr = this.data.slice(1).map(i => i.data);
    return arr;
  };
};

// ================ code 二叉树 链表实现 ================
export class BinaryTreeLink<T> implements BTreeLink<T> {
  root: BTreeNodeLink<T>;

  constructor(data: Array<T> = []) {
    if (!data.length) {
      this.root = null;
      return;
    }

    let queue = new QueueLink([], 100);
    let shouldAddLeft = true;
    let tmpRoot: BTreeNodeLink<T>;

    /* 处理根节点 */
    tmpRoot = new BTreeNodeLink(data[0]);
    this.root = tmpRoot;
    queue.addQ(tmpRoot);

    /* 处理其他节点: 既要插入队列，又要挂载到父节点上 */
    /* 保证每个 data 数组的每个值都有父节点 */
    /* 不保证队列会清空，未清空的就是叶节点 */
    for (let i = 1; i < data.length; i++) {
      if (shouldAddLeft) {
        /* 说明轮到新的 root, 需要从队列中取出新的节点，并更新 root */
        tmpRoot = queue.deleteQ();
      }

      /* 产生子节点: 要么是合法的node, 要么是空指针 */
      /* 如果是合法的node, 添加到队列，因为可能是某个子树的根节点 */
      let tmpNode: BTreeNodeLink<T>;
      if (data[i] == null) {
        tmpNode = null;
      } else {
        tmpNode = new BTreeNodeLink(data[i]);
        queue.addQ(tmpNode);
      }

      /* 挂载到父节点的正确位置上 */
      if (shouldAddLeft) {
        tmpRoot.left = tmpNode;
      } else {
        tmpRoot.right = tmpNode;
      }

      /* 切换左右 */
      shouldAddLeft = !shouldAddLeft;
    }
  }

  isEmpty = () => {
    return BinaryTreeLink.IsEmpty(this.root);
  };

  static IsEmpty<T>(root: BTreeNodeLink<T>): boolean {
    return !root;
  }

  traversal = (type: traversalType = 'inOrder', recursive = true) => {
    switch (type) {
      case 'inOrder':
        return BinaryTreeLink.InOrderTraversal(this.root, recursive);
      case 'preOrder':
        return BinaryTreeLink.PreOrderTraversal(this.root, recursive);
      case 'postOrder':
        return BinaryTreeLink.PostOrderTraversal(this.root, recursive);
      case 'levelOrder':
        return BinaryTreeLink.LevelOrderTraversal(this.root);
      default:
        return [];
    }
  };

  getHeight = () => {
    return BinaryTreeLink.GetHeight(this.root);
  };

  static InOrderTraversal<T>(root: BTreeNodeLink<T>, recursive = true): Array<T> {
    const rst: Array<T> = [];
    if (recursive) {
      BinaryTreeLink._inOrderTraversal(root, node => { rst.push(node.data); });
    } else {
      BinaryTreeLink._iterativeInOrderTraversal(root, node => { rst.push(node.data); });
    }
    return rst;
  }
  static PreOrderTraversal<T>(root: BTreeNodeLink<T>, recursive = true): Array<T> {
    const rst: Array<T> = [];

    if (recursive) {
      BinaryTreeLink._preOrderTraversal(root, node => { rst.push(node.data); });
    } else {
      BinaryTreeLink._iterativePreOrderTraversal(root, node => { rst.push(node.data); });
    }
    return rst;
  }
  static PostOrderTraversal<T>(root: BTreeNodeLink<T>, recursive = true): Array<T> {
    const rst: Array<T> = [];
    if (recursive) {
      BinaryTreeLink._postOrderTraversal(root, node => { rst.push(node.data); });
    } else {
      BinaryTreeLink._iterativePostOrderTraversal(root, node => { rst.push(node.data); });
    }
    return rst;
  }
  static LevelOrderTraversal<T>(root: BTreeNodeLink<T>): Array<T> {
    const rst: Array<BTreeNodeLink<T>> = [];
    const queue = new QueueLink([], 100);
    let tmpNode = root;

    while (tmpNode) {
      rst.push(tmpNode);
      if (tmpNode.left) {
        queue.addQ(tmpNode.left);
      }
      if (tmpNode.right) {
        queue.addQ(tmpNode.right);
      }

      try {
        tmpNode = queue.deleteQ();
      } catch (err) {
        tmpNode = null;
      }
    }

    return rst.map(node => node.data);
  }

  /* 递归_中序遍历 VLR */
  static _inOrderTraversal<T>(root: BTreeNodeLink<T>, visit: traversalVisitor<T>) {
    if (root) {
      BinaryTreeLink._inOrderTraversal(root.left, visit);
      visit(root);
      BinaryTreeLink._inOrderTraversal(root.right, visit);
    }
  }
  /* 递归_先序遍历 LVR */
  static _preOrderTraversal<T>(root: BTreeNodeLink<T>, visit: traversalVisitor<T>) {
    if (root) {
      visit(root);
      BinaryTreeLink._preOrderTraversal(root.left, visit);
      BinaryTreeLink._preOrderTraversal(root.right, visit);
    }
  }
  /* 递归_后序遍历 LRV */
  static _postOrderTraversal<T>(root: BTreeNodeLink<T>, visit: traversalVisitor<T>) {
    if (root) {
      BinaryTreeLink._postOrderTraversal(root.left, visit);
      BinaryTreeLink._postOrderTraversal(root.right, visit);
      visit(root);
    }
  }

  /* 迭代_中序遍历 VLR */
  static _iterativeInOrderTraversal<T>(root: BTreeNodeLink<T>, visit: traversalVisitor<T>) {
    if (!root) {
      return;
    }

    const stack = new StackLink([], 100);
    let tmpNode = root;
    while (!stack.isEmpty() || tmpNode) {
      if (tmpNode) {
        stack.push(tmpNode);
        tmpNode = tmpNode.left;
      } else {
        tmpNode = stack.pop();
        visit(tmpNode);
        tmpNode = tmpNode.right;
      }
    }
  }
  /* 迭代_先序遍历 LVR */
  static _iterativePreOrderTraversal<T>(root: BTreeNodeLink<T>, visit: traversalVisitor<T>) {
    if (!root) {
      return;
    }

    const stack = new StackLink([root], 100);
    let tmpNode = root;

    while (!stack.isEmpty()) {
      tmpNode = stack.pop();
      visit(tmpNode);
      if (tmpNode.right) {
        stack.push(tmpNode.right);
      }
      if (tmpNode.left) {
        stack.push(tmpNode.left);
      }
    }
  }
  /* 迭代_后序遍历 LRV */
  static _iterativePostOrderTraversal<T>(root: BTreeNodeLink<T>, visit: traversalVisitor<T>) {
    if (!root) {
      return;
    }

    const stack = new StackLink<BTreeNodeLink<T>>([root], 100);
    const outputStack = new StackLink<BTreeNodeLink<T>>([], 100);
    let tmpNode = root;

    while (!stack.isEmpty()) {
      tmpNode = stack.pop();
      outputStack.push(tmpNode);

      if (tmpNode.left) {
        stack.push(tmpNode.left);
      }

      if (tmpNode.right) {
        stack.push(tmpNode.right);
      }
    }

    while (!outputStack.isEmpty()) {
      visit(outputStack.pop());
    }
  }

  static GetHeight<T>(root: BTreeNodeLink<T>): number {
    if (!root) {
      return 0;
    }

    const heightLeft = BinaryTreeLink.GetHeight(root.left);
    const heightRight = BinaryTreeLink.GetHeight(root.right);

    return Math.max(heightLeft, heightRight) + 1;
  }
}

export default BinaryTreeLink;
