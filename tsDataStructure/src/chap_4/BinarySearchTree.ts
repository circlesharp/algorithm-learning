import BinaryTree, { BTreeNodeLink as BTreeNode } from './BinaryTree';

type traversalType = 'inOrder' | 'preOrder' | 'postOrder' | 'levelOrder';

interface BST<T> {
	root: BTreeNode<T>;
	isEmpty: () => boolean;
	traversal: (type: traversalType) => void;
	getHeight: () => number;
	find: (element: T) => number;
	findMin: () => number;
	findMax: () => number;
}

class BinarySearchTree<T> extends BinaryTree<T> implements BST<T> {
	constructor(data: Array<T> = []) {
		super();
		let root: BTreeNode<T>;
		for (let i = 0; i < data.length; i++) {
			root = BinarySearchTree.Insert(this.root, data[i]);
			if (i === 0) {
				this.root = root;
			}
		}
	}

	find = () => {
		return -1;
	};
	findMin = () => {
		return -1;
	};
	findMax = () => {
		return -1;
	};

	static Insert<T>(root: BTreeNode<T>, element: T): BTreeNode<T> {
		if (!root) {
			return new BTreeNode(element);
		}

		if (element < root.data) {
			root.left = BinarySearchTree.Insert(root.left, element);
		} else if (element > root.data) {
			root.right = BinarySearchTree.Insert(root.right, element);
		} else {
			// 不需要操作，要么比根大，要么比根小
		}

		return root;
	}
}

export default BinarySearchTree;
