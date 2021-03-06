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

interface AVL<T> extends BST<T> {
	getBalanceFactor: () => number;
}

class BalancedBinaryTree<T> extends BinarySearchTree<T> implements AVL<T> {
	constructor(data: Array<T> = []) {
		super();
		for (const element of data) {
			this.insert(element);
		}
	}

	insert = (element: T) => {
		this.root = BalancedBinaryTree.Insert(this.root, element);
	};

	delete = (element: T) => {
		this.root = BalancedBinaryTree.Delete(this.root, element);
	};

	getBalanceFactor = () => {
		return BalancedBinaryTree.GetBalanceFactor(this.root);
	};

	static Insert<T>(root: BTreeNode<T>, element: T): BTreeNode<T> {
		if (!root) {
			root = new BTreeNode(element);
			root.height = 1;
			return root;
		}

		if (element < root.data) {
			root.left = BalancedBinaryTree.Insert(root.left, element);
		} else if (element > root.data) {
			root.right = BalancedBinaryTree.Insert(root.right, element);
		} else if (element === root.data) {
			/* 无需操作 */
		}

		/* 平衡化 */
		root = BalancedBinaryTree._Rebalance(root);

		/* 更新树高 */
		root.height = BalancedBinaryTree._RefreshHeight(root);

		return root;
	}

	static Delete<T>(root: BTreeNode<T>, element: T): BTreeNode<T> {
		root = BinarySearchTree.Delete(root, element);
		root.left = BalancedBinaryTree._Rebalance(root.left);
		root.right = BalancedBinaryTree._Rebalance(root.right);

		return root;
	}

	/* 左单旋 */
	static SingleLeftRotation<T>(root: BTreeNode<T>): BTreeNode<T> {
		const newRoot: BTreeNode<T> = root.right;
		root.right = newRoot.left;
		newRoot.left = root;

		root.height = BalancedBinaryTree._RefreshHeight(root);
		newRoot.height = BalancedBinaryTree._RefreshHeight(newRoot);

		return newRoot;
	}

	/* 右单旋 */
	static SingleRightRotation<T>(root: BTreeNode<T>): BTreeNode<T> {
		const newRoot: BTreeNode<T> = root.left;
		root.left = newRoot.right;
		newRoot.right = root;

		root.height = BalancedBinaryTree._RefreshHeight(root);
		newRoot.height = BalancedBinaryTree._RefreshHeight(newRoot);

		return newRoot;
	}

	/* 左-右双旋 */
	static DoubleLeftRightRotation<T>(root: BTreeNode<T>): BTreeNode<T> {
		root.left = BalancedBinaryTree.SingleLeftRotation(root.left);
		return BalancedBinaryTree.SingleRightRotation(root);
	}

	/* 右-左双旋 */
	static DoubleRightLeftRotation<T>(root: BTreeNode<T>): BTreeNode<T> {
		root.right = BalancedBinaryTree.SingleRightRotation(root.right);
		return BalancedBinaryTree.SingleLeftRotation(root);
	}

	static GetHeight<T>(root: BTreeNode<T>): number {
		return root?.height || 0;
	}

	static GetBalanceFactor<T>(root: BTreeNode<T>): number {
		return BalancedBinaryTree.GetHeight(root.left) - BalancedBinaryTree.GetHeight(root.right);
	}

	static _Rebalance<T>(root: BTreeNode<T>): BTreeNode<T> {
		if (BalancedBinaryTree.GetBalanceFactor(root) === 2) {
			/* 需要调整 */
			if (BalancedBinaryTree.GetBalanceFactor(root.left) === 1) {
				/* 右单旋 BF === 1 */
				root = BalancedBinaryTree.SingleRightRotation(root);
			} else {
				/* 左-右双旋 BF === -1 */
				root = BalancedBinaryTree.DoubleLeftRightRotation(root);
			}
		} else if (BalancedBinaryTree.GetBalanceFactor(root) === -2) {
			if (BalancedBinaryTree.GetBalanceFactor(root.right) === -1) {
				/* 左单旋 BF === -1 */
				root = BalancedBinaryTree.SingleLeftRotation(root);
			} else {
				/* 右-左双旋 BF === 1 */
				root = BalancedBinaryTree.DoubleRightLeftRotation(root);
			}
		} else {
			/* 不需操作 */
		}

		return root;
	}

	static _RefreshHeight<T>(root: BTreeNode<T>): number {
		return Math.max(
			BalancedBinaryTree.GetHeight(root.left),
			BalancedBinaryTree.GetHeight(root.right),
		) + 1;
	}
}

export default BalancedBinaryTree;
