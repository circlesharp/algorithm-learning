import { genOrderedIntArray } from "../../utils/testTools";
import BinarySearchTree from "../BinarySearchTree";

describe('Binary Search Tree', () => {
	it('初始化', () => {
		const bst = new BinarySearchTree([1, 2, 3]);
		expect(bst.traversal('levelOrder')).toEqual([1, 2, 3]);
		expect(bst.traversal('inOrder')).toEqual([1, 2, 3]);
		expect(bst.traversal('preOrder')).toEqual([1, 2, 3]);
		expect(bst.traversal('postOrder')).toEqual([3, 2, 1]);

		const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		const levelOrderRst = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'May', 'Aug', 'July', 'Sep', 'Dec', 'Oct', 'Nov'];
		const monthBst = new BinarySearchTree(month);
		expect(monthBst.traversal('levelOrder')).toEqual(levelOrderRst);
	});
});
