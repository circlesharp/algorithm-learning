import { genRandomIntArray } from "../utils/testTools";
import ListSeq from "./LinearList";

describe('线性结构-顺序表', ()=>{
  it('初始化', () => {
    const randomArr = genRandomIntArray();
    const listSeq = new ListSeq(randomArr);
    expect(listSeq.data).toEqual(randomArr);
  });
});
