import { genRandomIntArray } from "../utils/testTools";
import ListSeq from "./LinearList";

describe('线性结构-顺序表', ()=>{
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

  it('插入元素', () =>{
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
    expect(listSeq.delete(9)).toEqual(true);
    expect(listSeq.data[listSeq.last]).toEqual(randomArr[randomArr.length - 2]);
  });
});
