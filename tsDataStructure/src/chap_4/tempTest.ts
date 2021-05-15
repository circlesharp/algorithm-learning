class ANode<T> {
	data: T;

	constructor(x: T) {
		this.data = x;
	}
}

class BNode<T> extends ANode<T> {
	data: T;
	height: number = 1;

	constructor(x: T) {
		super(x);
	}
}

interface AT<T> {
	root: ANode<T>;
	getRoot: () => ANode<T>;
}

// interface BT<T> {
// 	root: BNode<T>;
// 	getRoot: () => BNode<T>;
// 	showRootHeight: () => number;
// }

interface BT<T> extends AT<T> {
	root: BNode<T>;
	getRoot: () => BNode<T>;
	showRootHeight: () => number;
}

class ATree<T> implements AT<T> {
	root: ANode<T>;

	constructor(x: T) {
		this.root = new ANode(x);
	}

	getRoot() {
		return this.root;
	}
}

class BTree<T> extends ATree<T> implements BT<T> {
	root: BNode<T>;

	constructor(x: T) {
		super(x);
		this.root = new BNode(x);
	}

	getRoot() {
		return this.root;
	}

	showRootHeight() {
		return this.root.height;
	}
}

let bTree = new BTree(1);
// bTree.getRoot().;
