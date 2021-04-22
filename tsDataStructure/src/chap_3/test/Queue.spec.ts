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
});
