interface LinearListSeq<T> {
  maxSize?: number;
  data: Array<T>;
  last: number;
  insert: (element: T, position: number) => boolean;
  delete: (position: number) => boolean;
  find: (element: T) => number;
  findKth: (position: number) => T | undefined;
  toArray: () => Array<T>;
}

class ListSeq<T> implements LinearListSeq<T> {
  data = [];
  last = -1;
  maxSize;

  constructor(data: Array<T> = [], maxSize = 20) {
    for (let i = 0; i < Math.min(maxSize, data.length); i++) {
      this.data[i] = data[i];
    }
    this.last = this.data.length - 1;
    this.maxSize = maxSize;
  }

  insert = (element, idx) => {
    if (idx > this.maxSize - 1) {
      return false;
    }
    if (idx < 0 || idx >= this.last + 2) {
      return false;
    }

    for (let j = this.last; j >= idx; j--) {
      this.data[j + 1] = this.data[j];
    }

    this.data[idx] = element;
    this.last += 1;

    return true;
  }

  delete = (idx) => {
    if (idx < 0 || idx > this.last) {
      return false;
    }

    for (let j = idx; j < this.last; j++) {
      this.data[j] = this.data[j + 1];
    }

    this.last -= 1;

    return true;
  }

  find = (element) => {
    for (let i = 0; i <= this.last; i++) {
      if (this.data[i] === element) {
        return i;
      }
    }

    return -1;
  }

  findKth = (position) => {
    if (position < 0 || position > this.last) {
      return undefined;
    }
    return this.data[position];
  }

  toArray = () => {
    return Array.from(this.data);
  }
}

export default ListSeq;
