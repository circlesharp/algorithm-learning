import { genOrderedIntArray } from "../../utils/testTools";
import { BinaryTreeSeq } from '../BinaryTree';

describe('Binary Tree Seq', () => {
  const size = 20;
  const arr = genOrderedIntArray(size, 1);
  const bTreeSeq = new BinaryTreeSeq(arr);

  it('初始化', () => {
    expect(bTreeSeq.length).toEqual(size);
    expect(bTreeSeq.toArray()).toEqual(arr);
  });

  it('findKthNode', () => {
    for (let i = 1; i <= size; i++) {
      expect(bTreeSeq.findKthNode(i).data).toEqual(arr[i - 1]);
    }
    expect(bTreeSeq.findKthNode(0)).toEqual(null);
    expect(bTreeSeq.findKthNode(21)).toEqual(null);
  });

  it('getParent', () => {
    expect(bTreeSeq.getParent(16).data).toEqual(arr[8 - 1]);
    expect(bTreeSeq.getParent(17).data).toEqual(arr[8 - 1]);
    expect(bTreeSeq.getParent(1)).toEqual(null);
  });

  it('getChild', () => {
    expect(bTreeSeq.getChildLeft(1).data).toEqual(2);
    expect(bTreeSeq.getChildRight(1).data).toEqual(3);

    expect(bTreeSeq.getChildLeft(5).data).toEqual(10);
    expect(bTreeSeq.getChildRight(5).data).toEqual(11);

    expect(bTreeSeq.getChildLeft(10).data).toEqual(20);
    expect(bTreeSeq.getChildRight(10)).toEqual(null);
  });
});
