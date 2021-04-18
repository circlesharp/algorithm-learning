interface ListNode<T> {
  data: T;
  next: ListNode<T> | null;
}

interface LinearListLink<T> {
  head: ListNode<T>;
  tail: ListNode<T>;
  length: number;
  insert: (element: T, position: number) => boolean;
  delete: (position: number) => boolean;
  find: (element: T) => number;
  findKth: (position: number) => T;
  findKthNode: (position: number) => ListNode<T> | null;
  toArray: () => Array<T>;
}

class ListLink<T> implements LinearListLink<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  length = 0;

  constructor(data: Array<T> = []) {
    for (let i = 0; i < data.length; i++) {
      this.insert(data[i], i);
    }

  }

  insert = (element, position) => {
    const node: ListNode<T> = {
      data: element,
      next: null,
    };

    if (position === 0) {
      if (this.head === null) {
        /* 空链表 */
        this.head = node;
      } else {
        /* 非空 */
        node.next = this.head;
        this.head = node;
      }

    } else {
      const preNode = this.findKthNode(position - 1);
      if (!preNode) {
        return false;
      }
      node.next = preNode.next;
      preNode.next = node;
    }

    if (position === this.length) {
      this.tail = node;
    }
    this.length += 1;
    return true;
  };

  delete = (position) => {
    if (position >= this.length || position < 0) {
      return false;
    }

    let tmpNode: ListNode<T>, preNode: ListNode<T>;

    tmpNode = this.findKthNode(position);

    if (position === 0) {
      /* 链表头 */
      this.head = tmpNode.next;
    } else {
      preNode = this.findKthNode(position - 1);
      preNode.next = tmpNode.next;
    }

    return true;
  };
  find = (element): number => {
    return 1;
  };
  findKth = (element): T => {
    return this.head.data;
  };
  findKthNode = (position): ListNode<T> | null => {
    if (position >= this.length || position < 0) {
      return null;
    }

    let node = this.head;
    let i = 0;
    while (i < position) {
      node = node.next;
      i++;
    }

    return node;
  };
  toArray = () => {
    const arr = [];
    let node = this.head;

    if (this.length === 0) {
      return arr;
    }

    while (node.next) {
      arr.push(node.data);
      node = node.next;
    }
    arr.push(node.data);

    return arr;
  };
}

export default ListLink;
