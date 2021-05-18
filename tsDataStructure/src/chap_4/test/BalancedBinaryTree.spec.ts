import BalancedBinaryTree from "../BalancedBinaryTree";

describe('Balanced Binary Tree (AVL Tree)', () => {
	it('初始化 - 单旋', () => {
		const arr = ['Mar', 'May', 'Nov'];
		const avlTree = new BalancedBinaryTree(arr);
		expect(avlTree.traversal('levelOrder')).toEqual(['May', 'Mar', 'Nov']);

		avlTree.insert('Aug');
		expect(avlTree.traversal('levelOrder')).toEqual(['May', 'Mar', 'Nov', 'Aug',]);

		avlTree.insert('Apr');
		expect(avlTree.traversal('levelOrder')).toEqual(['May', 'Aug', 'Nov', 'Apr', 'Mar']);
	});

	it('初始化 - 双旋', () => {
		const arr = ['Mar', 'May', 'Nov', 'Aug', 'Apr'];
		const avlTree = new BalancedBinaryTree(arr);
		expect(avlTree.traversal('levelOrder')).toEqual(['May', 'Aug', 'Nov', 'Apr', 'Mar']);

		avlTree.insert('Jan');
		expect(avlTree.traversal('levelOrder')).toEqual(['Mar', 'Aug', 'May', 'Apr', 'Jan', 'Nov']);

		avlTree.insert('Dec');
		avlTree.insert('July');
		expect(avlTree.traversal('levelOrder')).toEqual(['Mar', 'Aug', 'May', 'Apr', 'Jan', 'Nov', 'Dec', 'July']);

		avlTree.insert('Feb');
		expect(avlTree.traversal('levelOrder')).toEqual(['Mar', 'Dec', 'May', 'Aug', 'Jan', 'Nov', 'Apr', 'Feb', 'July']);
	});

	it('删除结点 - test 1 - 月份', () => {
		const arr = ['Mar', 'May', 'Nov', 'Aug', 'Apr', 'Jan', 'Dec', 'July', 'Feb'];
		const avlTree = new BalancedBinaryTree(arr);
		expect(avlTree.traversal('levelOrder')).toEqual(['Mar', 'Dec', 'May', 'Aug', 'Jan', 'Nov', 'Apr', 'Feb', 'July']);

		avlTree.delete('Feb');
		expect(avlTree.traversal('levelOrder')).toEqual(['Mar', 'Dec', 'May', 'Aug', 'Jan', 'Nov', 'Apr', 'July']);

		avlTree.delete('Mar');
		expect(avlTree.traversal('levelOrder')).toEqual(['July', 'Dec', 'May', 'Aug', 'Jan', 'Nov', 'Apr']);
	});

	it('删除结点 - test 2 - 单旋', () => {
		const arr = [50, 25, 75, 17, 37, 67, 87, 10];
		const avlTree = new BalancedBinaryTree(arr);
		expect(avlTree.traversal('levelOrder')).toEqual(arr);
		expect(avlTree.traversal('inOrder')).toEqual(Array.from(arr).sort((a, b) => a - b));

		avlTree.delete(50);
		expect(avlTree.traversal('levelOrder')).toEqual([37, 17, 75, 10, 25, 67, 87]);
	});

	it('删除结点 - test 3 - 双旋', () => {
		const arr = [50, 25, 75, 17, 37, 67, 87, 10];
		const avlTree = new BalancedBinaryTree(arr);
		expect(avlTree.traversal('levelOrder')).toEqual(arr);
		expect(avlTree.traversal('inOrder')).toEqual(Array.from(arr).sort((a, b) => a - b));

		avlTree.delete(50);
		expect(avlTree.traversal('levelOrder')).toEqual([37, 17, 75, 10, 25, 67, 87]);
	});
});
