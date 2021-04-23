import { genOrderedIntArray } from "../../utils/testTools";
import { QueueSeq } from '../Queue';

describe('顺序队列', () => {
	it('初始化', () => {
		const size = 10;
		const arr = genOrderedIntArray(size);
		const queue = new QueueSeq(arr, size);

		expect(queue.toArray()).toEqual(arr);
		expect(queue.front).toEqual(0);
		expect(queue.rear).toEqual(size);
		expect(queue.length).toEqual(size);
		expect(queue.maxSize).toEqual(size);

		const queueEmpty = new QueueSeq();

		expect(queueEmpty.toArray()).toEqual([]);
		expect(queueEmpty.front).toEqual(0);
		expect(queueEmpty.rear).toEqual(0);
		expect(queueEmpty.length).toEqual(0);
	});

	it('isEmpty', () => {
		const queueEmpty = new QueueSeq();
		expect(queueEmpty.isEmpty()).toEqual(true);
	});

	it('isFull', () => {
		const size = 10;
		const arr = genOrderedIntArray(size);
		const queueFull = new QueueSeq(arr, size);
		expect(queueFull.rear).toEqual(size);
		expect(queueFull.front).toEqual(0);
		expect(queueFull.isFull()).toEqual(true);
	});

	it('addQ', () => {
		const size = 10;
		const arr = genOrderedIntArray(size);
		const queue = new QueueSeq(arr, size + 1);

		expect(queue.rear).toEqual(size);
		expect(queue.addQ(233)).toEqual(true);
		expect(queue.length).toEqual(size + 1);
		expect(queue.rear).toEqual(size + 1);
		expect(queue.toArray()).toEqual([...arr, 233]);
		expect(queue.isFull()).toEqual(true);
		expect(queue.addQ.bind(queue, 244)).toThrow(/full/);
	});

	it('deleteQ', () => {
		const size = 10;
		const arr = genOrderedIntArray(size);
		const queue = new QueueSeq(arr, size);

		for (let i = 0; i < size; i++) {
			expect(queue.deleteQ()).toEqual(arr[i]);
			expect(queue.toArray()).toEqual(arr.slice(i + 1, size));
		}

		expect(queue.isEmpty()).toEqual(true);
	});

	it('addQ & deleteQ', () => {
		const size = 10;
		const maxSize = 12;
		const arr = genOrderedIntArray(size);
		const queue = new QueueSeq(arr, maxSize);

		expect(queue.addQ(233)).toEqual(true);
		expect(queue.rear).toEqual(11);
		expect(queue.front).toEqual(0);
		expect(queue.toArray()).toEqual([...arr, 233]);

		expect(queue.deleteQ()).toEqual(arr[0]);
		expect(queue.front).toEqual(1);
		expect(queue.toArray()).toEqual([...(arr.slice(1, size)), 233]);

		queue.addQ(244);
		queue.addQ(255);
		const arrRst = [...(arr.slice(1, size)), 233, 244, 255];
		expect(queue.isFull()).toEqual(true);
		expect(queue.toArray()).toEqual(arrRst);
		expect(queue.rear).toEqual(0);
	});
});
