import BinaryTree, { BTreeNodeLink as BTreeNode, BTreeLink } from './BinaryTree';

export interface BST<T> extends BTreeLink<T> {
	find: (element: T) => BTreeNode<T>;
	findMin: () => BTreeNode<T>;
	findMax: () => BTreeNode<T>;
	delete: (element: T) => void;
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

	find = (element: T) => {
		return BinarySearchTree.Find(this.root, element);
	};
	findMin = () => {
		return BinarySearchTree.FindMin(this.root);
	};
	findMax = () => {
		return BinarySearchTree.FindMax(this.root);
	};
	delete = (element: T) => {
		this.root = BinarySearchTree.Delete(this.root, element);
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

	static Find<T>(root: BTreeNode<T>, element: T): BTreeNode<T> {
		if (!root) {
			return null;
		}

		if (root.data > element) {
			return BinarySearchTree.Find(root.left, element);
		} else if (root.data < element) {
			return BinarySearchTree.Find(root.right, element);
		} else {
			return root;
		}
	}

	static FindMin<T>(root: BTreeNode<T>): BTreeNode<T> {
		if (!root) {
			return null;
		}

		if (!root.left) {
			return root;
		}

		return BinarySearchTree.FindMin(root.left);
	}

	static FindMax<T>(root: BTreeNode<T>): BTreeNode<T> {
		if (!root) {
			return null;
		}

		if (!root.right) {
			return root;
		}

		return BinarySearchTree.FindMax(root.right);
	}

	static Delete<T>(root: BTreeNode<T>, element: T): BTreeNode<T> {
		if (!root) {
			return;
		}

		if (element < root.data) {
			root.left = BinarySearchTree.Delete(root.left, element);
		} else if (element > root.data) {
			root.right = BinarySearchTree.Delete(root.right, element);
		} else if (element === root.data) {
			/* root 就是要删除的结点 */
			if (root.left && root.right) {
				/* 改值 不改地址 */
				root.data = BinarySearchTree.FindMax(root.left).data;
				root.left = BinarySearchTree.Delete(root.left, root.data);
			} else if (root.left && !root.right) {
				root = root.left;
			} else if (root.right && !root.left) {
				root = root.right;
			} else if (!root.left && !root.right) {
				root = null;
			}
		}

		return root;
	}
}

export default BinarySearchTree;
