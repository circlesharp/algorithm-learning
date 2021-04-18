import { genOrderedIntArray, genRandomIntArray } from "../../utils/testTools";
import ListLink from "../LinearListLink";
import ListSeq from "../LinearListSeq";

describe('线性结构-顺序表', () => {
  it('初始化', () => {
    const randomArr = genRandomIntArray(10);
    const listSeq = new ListSeq(randomArr);
    expect(listSeq.data).toEqual(randomArr);
    expect(listSeq.last).toEqual(randomArr.length - 1);
  });

  it('初始化超出 maxSize', () => {
    const maxSize = 10;
    const randomArrOverSize = genRandomIntArray(22);
    const listSeqOverSize = new ListSeq(randomArrOverSize, maxSize);
    expect(listSeqOverSize.data).toEqual(randomArrOverSize.slice(0, maxSize));
    expect(listSeqOverSize.maxSize).toEqual(maxSize);
    expect(listSeqOverSize.last).toEqual(maxSize - 1);
  });

  it('插入元素', () => {
    const maxSize = 15;
    const element = 233;
    const randomArr = genRandomIntArray(10);
    const listSeq = new ListSeq(randomArr, maxSize);

    expect(listSeq.insert(element, 7)).toEqual(true);
    expect(listSeq.data[7]).toEqual(element);
    expect(listSeq.data[8]).toEqual(randomArr[7]);

    expect(listSeq.insert(element, -1)).toEqual(false);
    expect(listSeq.last).toEqual(randomArr.length);
    expect(listSeq.insert(element, listSeq.last + 1)).toEqual(true);
    expect(listSeq.last).toEqual(9 + 1 + 1);
    expect(listSeq.insert(element, listSeq.last + 2)).toEqual(false);
    expect(listSeq.insert(element, maxSize)).toEqual(false);
  });

  it('删除元素', () => {
    const randomArr = genRandomIntArray(10);
    const listSeq = new ListSeq(randomArr);

    expect(listSeq.delete(10)).toEqual(false);
    expect(listSeq.delete(-1)).toEqual(false);
    expect(listSeq.delete(9)).toEqual(true);
    expect(listSeq.data[listSeq.last]).toEqual(randomArr[randomArr.length - 2]);

    const listSeq_2 = new ListSeq(randomArr);
    for (let i = 0; i < 10; i++) {
      expect(listSeq_2.delete(0)).toEqual(true);
      expect(listSeq_2.last).toEqual(8 - i);
    }
  });

  it('查找元素', () => {
    const randomArr = [1, 22, 33, 44, 5, 6];
    const listSeq = new ListSeq(randomArr);

    for (let i = 0; i <= listSeq.last; i++) {
      expect(listSeq.find(randomArr[i])).toEqual(i);
    }

    const sameElement = 22;
    const sameArr = Array(10).fill(sameElement);
    const listSeq_2 = new ListSeq(sameArr);
    for (let i = 0; i <= listSeq_2.last; i++) {
      expect(listSeq_2.find(sameElement)).toEqual(0);
    }
  });
});

describe('线性结构-链表', () => {
  it('初始化', () => {
    // 非空
    const listLength = 10;
    const randomArr = genRandomIntArray(listLength);
    const listLink = new ListLink(randomArr);
    let listNode = listLink.head;

    for (let i = 0; i < listLength; i++, listNode = listNode.next) {
      expect(listNode.data).toEqual(randomArr[i]);
    }
    expect(listLink.tail.next).toEqual(null);

    // 空
    const listLinkEmpty = new ListLink();
    expect(listLinkEmpty.head).toEqual(null);
    expect(listLinkEmpty.tail).toEqual(null);
    expect(listLinkEmpty.length).toEqual(0);
  });
  it('插入元素', () => {
    const element = 233;
    // 空链表插入
    const listLinkEmpty = new ListLink();
    expect(listLinkEmpty.insert(element, -1)).toEqual(false);
    expect(listLinkEmpty.insert(element, 1)).toEqual(false);
    expect(listLinkEmpty.insert(element, 0)).toEqual(true);
    expect(listLinkEmpty.length).toEqual(1);
    expect(listLinkEmpty.tail.data).toEqual(element);

    // 非空链表插入
    const listLength = 10;
    const orderedArr = genOrderedIntArray(listLength);
    const listLink = new ListLink(orderedArr);
    expect(listLink.insert(element, -1)).toEqual(false);
    expect(listLink.insert(element, listLength + 1)).toEqual(false);
    expect(listLink.insert(element, listLength)).toEqual(true);
    expect(listLink.insert(element, 0)).toEqual(true);

    expect(listLink.length).toEqual(listLength + 2);
    expect(listLink.head.data).toEqual(element);
    expect(listLink.tail.data).toEqual(element);
    expect(listLink.findKthNode(0).data).toEqual(element);
    expect(listLink.findKthNode(1).data).toEqual(orderedArr[0]);
    expect(listLink.findKthNode(listLength).data).toEqual(orderedArr[listLength - 1]);
    expect(listLink.findKthNode(listLength + 1).data).toEqual(element);
  });
  it('遍历 转数组', () => {
    const listLinkEmpty = new ListLink();
    expect(listLinkEmpty.toArray()).toEqual([]);

    const listLength = 10;
    const orderedArr = genOrderedIntArray(listLength);
    const listLink = new ListLink(orderedArr);
    expect(listLink.toArray()).toEqual(orderedArr);

  });
});
