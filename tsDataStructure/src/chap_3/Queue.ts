type Queue<T> = {
	data?: Array<T>;
	front: number;
	rear: number;
	length: number;
	maxSize: number;
	isFull: () => boolean;
	isEmpty: () => boolean;
	addQ: (element: T) => boolean;
	deleteQ: () => T;
	toArray: () => Array<T>;
};

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
