import ListLink from "./LinearListLink";
import { ListNode } from './LinearListLink';
import ListSeq from "./LinearListSeq";

interface Stack<T> {
  data: ListSeq<T> | ListLink<T>;
  top: number | ListNode<T>;
  length?: number;
  maxSize: number;
  isFull: () => boolean;
  isEmpty: () => boolean;
  push: (element: T) => boolean;
  pop: () => T;
  toArray: () => Array<T>;
}

export class StackLink<T> implements Stack<T> {
  data: ListLink<T>;
  maxSize: number;

  constructor(data: Array<T> = [], maxSize = 20) {
    /* 倒序初始化，top 就是链表的 head */
    this.data = new ListLink(Array.from(data).reverse());
    this.maxSize = maxSize;
  }

  get top(): ListNode<T> {
    return this.data.head;
  }

  get length(): number {
    return this.data.length;
  }

  isFull = () => {
    return this.length === this.maxSize;
  };

  isEmpty = () => {
    return this.length === 0;
  };

  push: (element: T) => boolean = (element) => {
    if (this.isFull()) {
      throw Error('The stack is full.');
    }

    if (this.data.insert(element, 0)) {
      return true;
    }

    return false;
  }

  pop: () => T = () => {
    if (this.isEmpty()) {
      throw Error('The stack is empty.');
    }

    const node = this.top;
    this.data.delete(0);

    return node.data;
  }

  toArray: () => Array<T> = () => {
    return this.data.toArray().reverse();
  }
}

export class StackSeq<T> implements Stack<T> {
  data: ListSeq<T>;
  top: number = -1;
  maxSize: number;

  constructor(data: Array<T> = [], maxSize = 20) {
    this.data = new ListSeq(data, maxSize);
    this.top = this.data.last;
    this.maxSize = maxSize;
  }

  isFull = () => {
    return this.top === this.maxSize - 1;
  };

  isEmpty = () => {
    return this.top === -1;
  };

  push = (element) => {
    if (this.isFull()) {
      throw Error('The stack is full.');
    }
    this.top += 1;
    this.data.insert(element, this.top);
    return true;
  };

  pop = () => {
    if (this.isEmpty()) {
      throw Error('The stack is empty.');
    }

    const popData = this.data.findKth(this.top);
    this.data.delete(this.top);
    this.top -= 1;
    return popData;
  };

  toArray = () => {
    return this.data.toArray();
  };
}
