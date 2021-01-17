/* 并查集 */

class UnionFindSet {
  constructor(e) { // e => []parent, 位置信息代表该事物编号，值代表父节点的下标
    if (Array.isArray(e))
      this.setsData = e;
    if (typeof e === 'number')
      this.setsData = Array(e).fill(-1);
  }

  /* 路径压缩 尾递归 机器会自动优化称为循环 */
  find(x) {
    if (this.setsData[x] < 0)
      return x;

    /* 将 parent 的 root 赋值给自己的 parent */
    this.setsData[x] = this.find(this.setsData[x]);
    return this.setsData[x];
  }

  /* 按轶合并 (2种方法：比高度，比规模) 最坏情况是合并的时候2集合都差不错，树不得不长大 */
  union(root1, root2) {
    if (this.setsData[root2] < this.setsData[root1]) {
      this.setsData[root2] += this.setsData[root1];
      this.setsData[root1] = root2;
    } else {
      this.setsData[root1] += this.setsData[root2];
      this.setsData[root2] = root1;
    }
  }
}

module.exports = UnionFindSet;

const test01 = () => {
  const set = new UnionFindSet([6, -7, 1, 1, 1, 3, -3, 1, 3, 6]);
  console.log(set.find(3));
  console.log(set.find(2));
  console.log(set.find(6));
  console.log(set.find(0));
};

const test02 = () => {
  const set = new UnionFindSet(5);
  set.union(1, 2);
  set.union(3, 4);
  set.union(3, 0);
  set.union(3, 1);
  set.find(2);
  console.log(set.setsData);
};

// test02();
