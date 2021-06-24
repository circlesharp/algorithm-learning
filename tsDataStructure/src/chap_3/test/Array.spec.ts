import { deleteFromArray, insertIntoArray } from "../MyArray";

describe('Array Operation', () =>{
  it('insertIntoArray', () => {
		let arr = [1,2,3,4,5,6];

		insertIntoArray(arr, 2, 9);
		expect(arr).toEqual([1,2,9,3,4,5,6]);

		insertIntoArray(arr, 7, 8);
		expect(arr).toEqual([1,2,9,3,4,5,6,8]);
	});

	it('deleteFromArray', () =>{
		let arr = [1,2,3,4,5,6];

		deleteFromArray(arr, 2);
		expect(arr).toEqual([1,2,4,5,6]);

		deleteFromArray(arr, 4);
		expect(arr).toEqual([1,2,4,5]);
	})
})
