import BinarySearchTree from "../BinarySearchTree";

describe('Binary Search Tree', () => {
	const arr10 = [5, 4, 6, 3, 7, 1, 9, 2, 8, 0];
	const bst10 = new BinarySearchTree(arr10);

	it('初始化', () => {
		const bst = new BinarySearchTree([1, 2, 3]);
		expect(bst.traversal('levelOrder')).toEqual([1, 2, 3]);
		expect(bst.traversal('inOrder')).toEqual([1, 2, 3]);
		expect(bst.traversal('preOrder')).toEqual([1, 2, 3]);
		expect(bst.traversal('postOrder')).toEqual([3, 2, 1]);

		expect(bst10.traversal('levelOrder'))
			.toEqual([5, 4, 6, 3, 7, 1, 9, 0, 2, 8]);
		expect(bst10.getHeight()).toEqual(5);

		const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		const levelOrderRst = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'May', 'Aug', 'July', 'Sep', 'Dec', 'Oct', 'Nov'];
		const monthBst = new BinarySearchTree(month);
		expect(monthBst.traversal('levelOrder')).toEqual(levelOrderRst);
	});

	it('Find', () => {
		for (const element of arr10) {
			expect(bst10.find(element).data).toEqual(element);
		}

		expect(bst10.find(11)).toEqual(null);
	});

	it('FindMin', () => {
		expect(bst10.findMin().data).toEqual(0);
	});

	it('FindMax', () => {
		expect(bst10.findMax().data).toEqual(9);
	});

	it('Delete', () => {
		bst10.delete(100);
		expect(bst10.traversal('levelOrder'))
			.toEqual([5, 4, 6, 3, 7, 1, 9, 0, 2, 8]);

		bst10.delete(9);
		expect(bst10.traversal('levelOrder'))
			.toEqual([5, 4, 6, 3, 7, 1, 8, 0, 2]);

		bst10.delete(8);
		expect(bst10.traversal('levelOrder'))
			.toEqual([5, 4, 6, 3, 7, 1, 0, 2]);

		bst10.delete(5);
		expect(bst10.traversal('levelOrder'))
			.toEqual([4, 3, 6, 1, 7, 0, 2]);
	});
});
