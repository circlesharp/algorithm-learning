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
});
