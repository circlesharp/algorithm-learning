interface BH<T> {
	data: Array<T>;
	size: number;
	capacity: number;
	isFull: () => boolean;
	isEmpty: () => boolean;
	insert: (element: T) => boolean;
	top: () => T;
	delete: () => T;
}

/* Ps: swim, sink 的递归实现可参考 touch-fish 项目 */
class BinaryHeap<T> implements BH<T> {
	data: Array<T>;
	size = 0;
	capacity: number;
	compareCb: (i: T, j: T) => boolean;


	constructor(data = [], capacity = 100, compareCb = (i, j) => i < j) {
		this.data = Array(capacity + 1).fill(undefined);
		this.capacity = capacity;
		this.compareCb = compareCb;

		if (data && data.length > 0) {
			this._build(data);
		}
	}

	_build(data) {
		for (let i = 0; i < data.length; i++) {
			this.data[i + 1] = data[i];
		}
		this.size = data.length;

		for (let i = BinaryHeap.GetParent(this.size); i > 0; i--) {
			this._sink(i);
		}
	}

	isFull() {
		return this.size === this.capacity;
	}

	isEmpty() {
		return this.size === 0;
	}

	insert(element) {
		if (this.isFull()) {
			return false;
		}

		this.size += 1;
		this.data[this.size] = element;
		this._swim(this.size);

		return true;
	}

	top() {
		return this.data[1];
	}

	delete() {
		const result = this.top();
		this._sway(1, this.size);
		this.data[this.size] = undefined;
		this.size -= 1;
		this._sink(1);

		return result;
	}

	_sway(iIdx: number, jIdx: number): void {
		const tmp = this.data[iIdx];
		this.data[iIdx] = this.data[jIdx];
		this.data[jIdx] = tmp;
	};

	_swim(idx: number): void {
		let parentIdx;
		let childIdx = idx;

		while (childIdx > 1) {
			/* step1 找出要交换的父结点索引 parentIdx */
			parentIdx = BinaryHeap.GetParent(childIdx);

			/* step2 如果要交换，交换，更新下一次对比的索引; 如果不交换，返回 */
			if (this._needAdjust(parentIdx, childIdx)) {
				this._sway(parentIdx, childIdx);
				childIdx = parentIdx;
			} else {
				return;
			}
		}
	};

	_sink(idx: number): void {
		let parentIdx = idx;
		let childIdx, childLeftIdx, childRightIdx;

		while (BinaryHeap.GetChildLeft(parentIdx) <= this.size) {
			/* step1 找出要交换的子结点索引 childIdx */
			childLeftIdx = BinaryHeap.GetChildLeft(parentIdx);
			childRightIdx = BinaryHeap.GetChildRight(parentIdx);
			if (childRightIdx <= this.size) {
				childIdx = this._needAdjust(childLeftIdx, childRightIdx)
					? childRightIdx
					: childLeftIdx;
			} else {
				childIdx = childLeftIdx;
			}

			/* step2 如果要交换，交换，更新下一次对比的索引; 如果不交换，返回 */
			if (this._needAdjust(parentIdx, childIdx)) {
				this._sway(parentIdx, childIdx);
				parentIdx = childIdx;
			} else {
				return;
			}
		}
	};

	_needAdjust(parentIdx: number, childIdx: number): boolean {
		return this.compareCb(this.data[parentIdx], this.data[childIdx]);
	}

	_getPriorityQueue() {
		return this.data.slice(1, this.size + 1);
	}

	static GetParent(idx: number): number {
		return idx / 2 | 0;
	}

	static GetChildLeft(idx: number): number {
		return idx * 2;
	}

	static GetChildRight(idx: number): number {
		return idx * 2 + 1;
	}
}

export default BinaryHeap;
