/* 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15; */

const test = (n) => {
  const f = factor => {
    n + factor;
    return f;
  };
  f.toString = () =>
    n + 0.1;
  return f;
};

const t2 = x => {
  t2.toString = () => this.p;
  t2.p = (t2.p || 0) + x;
  return t2;
};

console.log(
  t2(2)
)
