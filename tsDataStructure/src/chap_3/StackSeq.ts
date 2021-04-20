import ListLink from "./LinearListLink";
import ListSeq from "./LinearListSeq";

interface Stack<T> {
  data: ListSeq<T> | ListLink<T>;
  top: number;
  maxSize: number;
  isFull: () => boolean;
  isEmpty: () => boolean;
  push: (element: T) => boolean;
  pop: () => T;
  toArray: () => Array<T>;
}

class StackSeq<T> implements Stack<T> {
  data: ListSeq<T>;
  top = -1;
  maxSize;

  constructor(data?: Array<T>, maxSize = 20) {
    this.data = new ListSeq(data, maxSize);
    this.top = this.data.last;
    this.maxSize = maxSize;
  }

  isFull = () => {
    return this.top === this.maxSize - 1;
  }

  isEmpty = () => {
    return this.top === -1;
  }

  push = (element) => {
    if (this.isFull()) {
      throw Error('The stack is full.')
    }
    this.top += 1;
    this.data.insert(element, this.top);
    return true;
  }

  pop = () => {
    return {} as T;
  }

  toArray = () => {
    return this.data.toArray();
  }
}
