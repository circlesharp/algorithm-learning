import BinaryHeap from "../BinaryHeap";

describe('Binary Heap / Priority Queue', () => {
	it('insert', () => {
		const priorityQueue = new BinaryHeap();
		const arr = [1, 2, 3, 4, 5, 6, 7];
		const rst = [
			[1],
			[2, 1],
			[3, 1, 2],
			[4, 3, 2, 1],
			[5, 4, 2, 1, 3],
			[6, 4, 5, 1, 3, 2],
			[7, 4, 6, 1, 3, 2, 5],
		];
		for (let i = 0; i < arr.length; i++) {
			priorityQueue.insert(arr[i]);
			expect(priorityQueue.size).toEqual(rst[i].length);
			expect(priorityQueue._getPriorityQueue()).toEqual(rst[i]);
			expect(priorityQueue.top()).toEqual(arr[i]);
		}
	});

	it('delete max', () => {
		const priorityQueue = new BinaryHeap();
		const arr = [1, 2, 3, 4, 5, 6, 7];
		const rst = [
			[6, 4, 5, 1, 3, 2],
			[5, 4, 2, 1, 3],
			[4, 3, 2, 1],
			[3, 1, 2],
			[2, 1],
			[1],
			[],
		];
		for (let i = 0; i < arr.length; i++) {
			priorityQueue.insert(arr[i]);
		}
		for (let i = 0; i < arr.length; i++) {
			expect(priorityQueue.delete()).toEqual(arr[arr.length - 1 - i]);
			expect(priorityQueue._getPriorityQueue()).toEqual(rst[i]);
			expect(priorityQueue.size).toEqual(rst[i].length);
		}
	});

	it('random test', () => {
		const priorityQueue = new BinaryHeap();
		const arr = [11, 2, 555, 3, 6646, 9, 1, 23, 56, 9090, 9090, 3];
		const rst = Array.from(arr).sort((a, b) => b - a);
		const result = [];

		for (let i = 0; i < arr.length; i++) {
			priorityQueue.insert(arr[i]);
		}
		for (let i = 0; i < arr.length; i++) {
			result.push(priorityQueue.delete());
		}

		expect(result).toEqual(rst);
	});

	it('random test with compareFn', () => {
		type weightWise = {
			weight: number;
		};
		const compareCb = (i: weightWise, j: weightWise) => i.weight < j.weight;
		const priorityQueue = new BinaryHeap<weightWise>([], 100, compareCb);
		const arr = [11, 2, 555, 3, 6646, 9, 1, 23, 56, 9090, 9090, 3];
		const rst = Array.from(arr).sort((a, b) => b - a);
		const result = [];

		for (let i = 0; i < arr.length; i++) {
			priorityQueue.insert({ weight: arr[i] });
		}
		expect(priorityQueue.size).toEqual(arr.length);

		for (let i = 0; i < arr.length; i++) {
			result.push(priorityQueue.delete().weight);
		}
		expect(priorityQueue.size).toEqual(0);
		expect(result).toEqual(rst);
	});

	it('build binary heap', () => {
		const arr = [1, 2, 3, 4, 5, 6, 7];
		const priorityQueue = new BinaryHeap(arr);
		for (let i = 0; i < arr.length; i++) {
			expect(priorityQueue.delete()).toEqual(arr[arr.length - 1 - i]);
		}

		const arr_2 = [11, 2, 555, 3, 6646, 9, 1, 23, 56, 9090, 9090, 3];
		const priorityQueue_2 = new BinaryHeap(arr_2);
		const rst = Array.from(arr_2).sort((a, b) => b - a);
		for (let i = 0; i < arr.length; i++) {
			expect(priorityQueue_2.delete()).toEqual(rst[i]);
		}

		type weightWise = {
			weight: number;
		};
		const arr_3 = [11, 2, 555, 3, 6646, 9, 1, 23, 56, 9090, 9090, 3];
		const rst_3 = Array.from(arr_3).sort((a, b) => b - a);
		const compareCb = (i: weightWise, j: weightWise) => i.weight < j.weight;
		const priorityQueue_3 = new BinaryHeap<weightWise>(arr_3.map(i => ({ weight: i })), 100, compareCb);
		for (let i = 0; i < arr.length; i++) {
			expect(priorityQueue_3.delete().weight).toEqual(rst_3[i]);
		}
	});
});
