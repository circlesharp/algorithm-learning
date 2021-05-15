/**
 * 平衡二叉树 （又 AVL树）
 *
 * AVL树或者是一颗空树，或者具有下列性质的非空**二叉搜索树**
 * 1. 任一结点的左、右子树均为AVL树；
 * 2. 根结点左、右子树高度差的绝对值不超过1（根结点的平衡因子只能在集合 {-1,0,1} 中取值）；
 *
 * 平衡因子（BF Balance_Factor）
 * BF(root) = h(root.left) - h(root.right)
 *
 */

import { BTreeNodeLink as BTreeNode } from './BinaryTree';
import BinarySearchTree, { BST } from './BinarySearchTree';

class AVLNode<T> extends BTreeNode<T> {
	data: T;
	left: BTreeNode<T> = null;
	right: BTreeNode<T> = null;
	height: number = 1;

	constructor(data: T) {
		super(data);
	}
}

interface AVL<T> extends BST<T> {
	// root: AVLNode<T>;
	// isEmpty: () => boolean;
	// traversal: (type: traversalType) => void;
	// getHeight: () => number;
	// find: (element: T) => AVLNode<T>;
	// findMin: () => AVLNode<T>;
	// findMax: () => AVLNode<T>;
	// delete: (element: T) => void;
}

class BalancedBinaryTree<T> extends BinarySearchTree<T> implements AVL<T> {
	constructor(data: Array<T> = []) {
		super(data);
		this.root = new AVLNode(data[0]);
	}
	// find = (x) => {
	// 	return this.root;
	// };
}

export default BalancedBinaryTree;
