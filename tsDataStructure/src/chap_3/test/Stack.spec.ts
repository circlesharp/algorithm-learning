import { genOrderedIntArray } from "../../utils/testTools";
import { StackSeq, StackLink } from "../Stack";

describe('顺序栈', () => {
	it('初始化', () => {
		const size = 10;
		const arr = genOrderedIntArray(size);
		const stack = new StackSeq(arr, size);

		expect(stack.toArray()).toEqual(arr);
		expect(stack.top).toEqual(size - 1);
		expect(stack.maxSize).toEqual(size);
	});
	it('isEmpty', () => {
		const stackEmpty = new StackSeq();
		expect(stackEmpty.isEmpty()).toEqual(true);
	});
	it('isFull', () => {
		const size = 10;
		const arr = genOrderedIntArray(size);

		const stackSize10 = new StackSeq(arr, size);
		expect(stackSize10.isFull()).toEqual(true);

		const stackSize20 = new StackSeq(arr, 20);
		expect(stackSize20.isFull()).toEqual(false);
	});
	it('push', () => {
		const size = 10;
		const arr = genOrderedIntArray(size);
		const stack = new StackSeq(arr.slice(0, 8), size);

		expect(stack.top).toEqual(7);
		expect(stack.toArray()).toEqual(arr.slice(0, 8));

		expect(stack.push(arr[8])).toEqual(true);
		expect(stack.top).toEqual(8);
		expect(stack.toArray()).toEqual(arr.slice(0, 9));

		expect(stack.push(arr[9])).toEqual(true);
		expect(stack.top).toEqual(9);
		expect(stack.toArray()).toEqual(arr);

		expect(stack.push.bind(stack, 233)).toThrow(/full/);
	});
	it('pop', () => {
		const size = 10;
		const arr = genOrderedIntArray(size);
		const stack = new StackSeq(arr);

		for (let i = 0; i < size; i++) {
			expect(stack.pop()).toEqual(arr[size - 1 - i]);
			expect(stack.top).toEqual(size - 1 - i - 1);
		}
		expect(stack.isEmpty()).toEqual(true);
		expect(stack.pop).toThrow(/empty/);
	});
});

describe('链栈', () => {
	it('初始化', () => {
		const size = 10;
		const arr = genOrderedIntArray(size);
		const stack = new StackLink(arr, size);

		expect(stack.toArray()).toEqual(arr);
		expect(stack.top.data).toEqual(arr[size - 1]);
		expect(stack.maxSize).toEqual(size);
	});
	it('isEmpty', () => {
		const stackEmpty = new StackLink();
		expect(stackEmpty.isEmpty()).toEqual(true);
	});
	it('isFull', () => {
		const size = 10;
		const arr = genOrderedIntArray(size);

		const stackSize10 = new StackLink(arr, size);
		expect(stackSize10.isFull()).toEqual(true);

		const stackSize20 = new StackLink(arr, 20);
		expect(stackSize20.isFull()).toEqual(false);
	});
	it('push', () => {
		const size = 10;
		const arr = genOrderedIntArray(size);
		const stack = new StackLink(arr.slice(0, 8), size);

		expect(stack.top.data).toEqual(arr[7]);
		expect(stack.toArray()).toEqual(arr.slice(0, 8));

		expect(stack.push(arr[8])).toEqual(true);
		expect(stack.top.data).toEqual(arr[8]);
		expect(stack.toArray()).toEqual(arr.slice(0, 9));

		expect(stack.push(arr[9])).toEqual(true);
		expect(stack.top.data).toEqual(arr[9]);
		expect(stack.toArray()).toEqual(arr);

		expect(stack.push.bind(stack, 233)).toThrow(/full/);
	});
	it('pop', () => {
		const size = 10;
		const arr = genOrderedIntArray(size);
		const stack = new StackLink(arr);

		for (let i = 0; i < size; i++) {
			expect(stack.pop()).toEqual(arr[size - 1 - i]);
			if (i < size - 1) {
				expect(stack.top.data).toEqual(arr[size - 1 - i - 1]);
			} else {
				expect(stack.top).toEqual(null);
			}
		}
		expect(stack.isEmpty()).toEqual(true);
		expect(stack.pop).toThrow(/empty/);
	});
});
