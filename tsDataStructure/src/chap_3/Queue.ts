import ListLink, { ListNode } from './LinearListLink';

type Queue<T> = {
	data?: Array<T>;
	front: number | ListNode<T>;
	rear: number | ListNode<T>;
	length: number;
	maxSize: number;
	isFull: () => boolean;
	isEmpty: () => boolean;
	addQ: (element: T) => boolean;
	deleteQ: () => T;
	toArray: () => Array<T>;
};

export class QueueLink<T> implements Queue<T> {
	front: ListNode<T>;
	rear: ListNode<T>;
	length: number = 0;
	maxSize: number;

	constructor(data: Array<T> = [], maxSize = 20) {
		const link = new ListLink(data);
		this.front = link.head;
		this.rear = link.tail;
		this.length = data.length;
		this.maxSize = maxSize;
	}

	isFull: () => boolean = () => {
		return this.length === this.maxSize;
	};

	isEmpty: () => boolean = () => {
		return this.length === 0;
	};

	addQ: (element: T) => boolean = (element) => {
		if (this.isFull()) {
			throw Error('The queue is full.');
		}

		const tmpNode: ListNode<T> = {
			data: element,
			next: null,
		};

		if (this.isEmpty()) {
			this.front = tmpNode;
			this.rear = tmpNode;
		} else {
			this.rear.next = tmpNode;
			this.rear = tmpNode;
		}
		this.length += 1;

		return true;
	};

	deleteQ: () => T = () => {
		if (this.isEmpty()) {
			throw Error('The queue is empty.');
		}

		const tmpNode = this.front;

		this.front = this.front.next;
		this.length -= 1;

		return tmpNode.data;
	};

	toArray: () => Array<T> = () => {
		const arr = [];
		let node = this.front;

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

export class QueueSeq<T> implements Queue<T> {
	data: Array<T>;
	front: number = 0;
	rear: number; // 上限不包括
	maxSize: number;

	constructor(data: Array<T> = [], maxSize = 20) {
		/* 多预留一位 */
		this.maxSize = maxSize;
		this.data = Array.from(data);
		this.rear = data.length;
	}

	/* 顺序表的真实容量, 不需要对外暴露 */
	get _realCapacity(): number {
		return this.maxSize + 1;
	}

	/*  */
	get length(): number {
		return this.front === this.rear
			? 0
			: this.front < this.rear
				? this.rear - this.front
				: this._realCapacity + this.rear - this.front;
	}

	isFull: () => boolean = () => {
		return this.front === (this.rear + 1) % this._realCapacity;
	};

	isEmpty: () => boolean = () => {
		return this.front === this.rear;
	};

	addQ: (element: T) => boolean = (element) => {
		if (this.isFull()) {
			throw Error('The queue is full.');
		}

		/* 不能使用 listSeq.insert */
		this.data[this.rear] = element;
		this.rear = (this.rear + 1) % this._realCapacity;
		return true;
	};

	deleteQ: () => T = () => {
		if (this.isEmpty()) {
			throw Error('The queue is empty.');
		}

		const value = this.data[this.front];
		this.front = (this.front + 1) % this._realCapacity;

		return value;
	};

	toArray: () => Array<T> = () => {
		let arr = [];

		for (let i = 0; i < this.length; i++) {
			arr.push(this.data[(this.front + i) % this._realCapacity]);
		}

		return arr;
	};
}
