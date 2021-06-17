/* Huffman Tree: 哈夫曼树，最优二叉树 */
/* WPL: Weighted Path Length, 带权路径长度 */
/* 要使 WPL 的值最小，必须使权重越大的叶结点越靠近根结点（贪心算法） */

import BinaryHeap from "./BinaryHeap";
import { BinaryTreeLink as BinaryTree, BTreeNodeLink } from "./BinaryTree";

type originData<T> = {
	value: T;
	weight: number;
};

interface HuffmanDict {
	[key: string]: string;
}

class HuffmanNode<T> extends BTreeNodeLink<T> {
	left: HuffmanNode<T>;
	right: HuffmanNode<T>;
	weight: number;

	constructor(data: T, weight: number) {
		super(data);
		this.weight = weight;
	}
}

class HuffmanTree<T> extends BinaryTree<T> {
	root: HuffmanNode<T>;

	constructor(data: Array<originData<T>>) {
		super();

		/* step1 生成最小堆 */
		const minHeapData = data.map(({ value, weight }) => {
			const node = new HuffmanNode(value, weight);
			return node;
		});
		const minHeapCb = (i: originData<T>, j: originData<T>) =>
			i.weight > j.weight;
		const minHeap = new BinaryHeap<HuffmanNode<T>>(minHeapData, undefined, minHeapCb);

		/* step2 构建二叉树 */
		let root: HuffmanNode<T>, left: HuffmanNode<T>, right: HuffmanNode<T>;
		while (minHeap.size > 1) {
			left = minHeap.delete();
			right = minHeap.delete();
			root = new HuffmanNode(undefined, left.weight + right.weight);
			root.left = left;
			root.right = right;
			minHeap.insert(root);
		}

		/* step3 构建完成 */
		this.root = minHeap.delete();
	}

	genCodeDictionary() {
		const result: HuffmanDict = {};
		HuffmanTree.GenCodeDictionary(this.root, result, '');

		return result;
	}

	static GenCodeDictionary<T>(root: HuffmanNode<T>, dict: HuffmanDict, code: string) {
		if (!root) {
			return;
		}

		if (root.data != null) {
			dict[String(root.data)] = code;
		}

		HuffmanTree.GenCodeDictionary(root.left, dict, `${code}0`);
		HuffmanTree.GenCodeDictionary(root.right, dict, `${code}1`);
	}
}

export default HuffmanTree;
