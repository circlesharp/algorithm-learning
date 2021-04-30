import { genOrderedIntArray } from "../../utils/testTools";
import { BinaryTreeSeq, BinaryTreeLink } from '../BinaryTree';

// describe('Binary Tree Link', () => {
//   const size = 20;
//   const arr = genOrderedIntArray(size, 1);
//   const bTree = new BinaryTreeLink(arr);

//   it('初始化', () => {
//     expect(bTree.data.data).toEqual(1);
//     expect(bTree.data.left.data).toEqual(2);
//     expect(bTree.data.right.data).toEqual(3);
//   });
// });

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
