import { genOrderedIntArray } from "../../utils/testTools";
import { BinaryTreeSeq, BinaryTreeLink } from '../BinaryTree';

describe('Binary Tree Link', () => {
  const size = 20;
  const arr = genOrderedIntArray(size, 1);
  const bTree = new BinaryTreeLink(arr);

  const bTreeEmpty = new BinaryTreeLink();

  it('初始化', () => {
    expect(bTree.root.data).toEqual(1);
    expect(bTree.root.left.data).toEqual(2);
    expect(bTree.root.right.data).toEqual(3);

    expect(bTree.root.left.left.data).toEqual(4);
    expect(bTree.root.left.right.data).toEqual(5);

    expect(bTree.root.left.right.left.left.data).toEqual(20);
    expect(bTree.root.left.right.left.right).toEqual(null);
  });

  it('isEmpty', () => {
    expect(bTree.isEmpty()).toEqual(false);
    expect(bTreeEmpty.isEmpty()).toEqual(true);

    expect(BinaryTreeLink.IsEmpty(bTree.root.right.right.right.right)).toEqual(true);
  });

  it('层序遍历 LevelOrderTraversal', () => {
    expect(BinaryTreeLink.LevelOrderTraversal(bTree.root)).toEqual(arr);
    expect(BinaryTreeLink.LevelOrderTraversal(bTree.root.left)).toEqual([2, 4, 5, 8, 9, 10, 11, 16, 17, 18, 19, 20]);
    expect(BinaryTreeLink.LevelOrderTraversal(bTree.root.right)).toEqual([3, 6, 7, 12, 13, 14, 15]);

    expect(BinaryTreeLink.LevelOrderTraversal(bTreeEmpty.root)).toEqual([]);
  });

  it('中序遍历 InOrderTraversal', () => {
    const LVR = [16, 8, 17, 4, 18, 9, 19, 2, 20, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15];
    expect(BinaryTreeLink.InOrderTraversal(bTree.root)).toEqual(LVR);
    expect(bTree.traversal('inOrder')).toEqual(LVR);

    const rstOfInOrderTraversal_2 = [12, 6, 13, 3, 14, 7, 15];
    expect(BinaryTreeLink.InOrderTraversal(bTree.root.right)).toEqual(rstOfInOrderTraversal_2);

    expect(bTreeEmpty.traversal('inOrder')).toEqual([]);

    expect(BinaryTreeLink.InOrderTraversal(bTree.root.right.right.right)).toEqual([15]);
  });

  it('先序遍历 PreOrderInOrderTraversal', () => {
    const VLR = [1, 2, 4, 8, 16, 17, 9, 18, 19, 5, 10, 20, 11, 3, 6, 12, 13, 7, 14, 15];
    expect(BinaryTreeLink.PreOrderTraversal(bTree.root)).toEqual(VLR);
    expect(bTree.traversal('preOrder')).toEqual(VLR);

    expect(bTreeEmpty.traversal('preOrder')).toEqual([]);

    expect(BinaryTreeLink.PreOrderTraversal(bTree.root.right.right.right)).toEqual([15]);
  });

  it('后序遍历 PostOrderTraversal', () => {
    const LRV = [16, 17, 8, 18, 19, 9, 4, 20, 10, 11, 5, 2, 12, 13, 6, 14, 15, 7, 3, 1];
    expect(BinaryTreeLink.PostOrderTraversal(bTree.root)).toEqual(LRV);
    expect(bTree.traversal('postOrder')).toEqual(LRV);

    expect(bTreeEmpty.traversal('postOrder')).toEqual([]);

    expect(BinaryTreeLink.PostOrderTraversal(bTree.root.right.right.right)).toEqual([15]);
  });

  it('中序遍历 迭代实现', () => {
    expect(BinaryTreeLink.InOrderTraversal(bTree.root, false))
      .toEqual(BinaryTreeLink.InOrderTraversal(bTree.root));
    expect(BinaryTreeLink.InOrderTraversal(bTree.root, false))
      .toEqual(BinaryTreeLink.InOrderTraversal(bTree.root));
    expect(bTree.traversal('inOrder', false))
      .toEqual(bTree.traversal('inOrder'));

    expect(BinaryTreeLink.InOrderTraversal(bTree.root.right, false))
      .toEqual(BinaryTreeLink.InOrderTraversal(bTree.root.right));

    expect(bTreeEmpty.traversal('inOrder', false))
      .toEqual(bTreeEmpty.traversal('inOrder'));

    expect(BinaryTreeLink.InOrderTraversal(bTree.root.right.right.right, false))
      .toEqual(BinaryTreeLink.InOrderTraversal(bTree.root.right.right.right));
  });
  it('先序遍历 迭代实现', () => {
    expect(BinaryTreeLink.PreOrderTraversal(bTree.root, false))
      .toEqual(BinaryTreeLink.PreOrderTraversal(bTree.root));

    expect(bTree.traversal('preOrder', false))
      .toEqual(bTree.traversal('preOrder'));

    expect(bTreeEmpty.traversal('preOrder', false))
      .toEqual(bTreeEmpty.traversal('preOrder'));

    expect(BinaryTreeLink.PreOrderTraversal(bTree.root.right.right.right, false))
      .toEqual(BinaryTreeLink.PreOrderTraversal(bTree.root.right.right.right));
  });
  it('后序遍历 PostOrderTraversal', () => {
    expect(BinaryTreeLink.PostOrderTraversal(bTree.root, false))
      .toEqual(BinaryTreeLink.PostOrderTraversal(bTree.root));

    expect(bTree.traversal('postOrder', false))
      .toEqual(bTree.traversal('postOrder'));

    expect(bTreeEmpty.traversal('postOrder', false))
      .toEqual(bTreeEmpty.traversal('postOrder'));

    expect(BinaryTreeLink.PostOrderTraversal(bTree.root.right.right.right, false))
      .toEqual(BinaryTreeLink.PostOrderTraversal(bTree.root.right.right.right));
  });
});

describe('Binary Tree Seq', () => {
  const size = 20;
  const arr = genOrderedIntArray(size, 1);
  const bTree = new BinaryTreeSeq(arr);

  it('初始化', () => {
    expect(bTree.length).toEqual(size);
    expect(bTree.toArray()).toEqual(arr);
  });

  it('findKthNode', () => {
    for (let i = 1; i <= size; i++) {
      expect(bTree.findKthNode(i).data).toEqual(arr[i - 1]);
    }
    expect(bTree.findKthNode(0)).toEqual(null);
    expect(bTree.findKthNode(21)).toEqual(null);
  });

  it('getParent', () => {
    expect(bTree.getParent(16).data).toEqual(arr[8 - 1]);
    expect(bTree.getParent(17).data).toEqual(arr[8 - 1]);
    expect(bTree.getParent(1)).toEqual(null);
  });

  it('getChild', () => {
    expect(bTree.getChildLeft(1).data).toEqual(2);
    expect(bTree.getChildRight(1).data).toEqual(3);

    expect(bTree.getChildLeft(5).data).toEqual(10);
    expect(bTree.getChildRight(5).data).toEqual(11);

    expect(bTree.getChildLeft(10).data).toEqual(20);
    expect(bTree.getChildRight(10)).toEqual(null);
  });
});
