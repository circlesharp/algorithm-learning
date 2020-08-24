/**
 * 复利
 * 每个月存 1000
 * 年利率 10%
 * 10年后有多少钱
 */

const n = 120;
const i = 0.1;
const p = 1000;

let total = 0;
let t = 0;

const save = (t = 0) => {
  t++;
  total = total * (1 + i / 12) + p;
  if (t === n) return total;
  return save(t);
};

const f = p * ((1 + i / 12) ** n - 1) / (1 / 12);

console.log(
  save(),
  f,
);

/**
 * [m, n] 取随机整数
 */

const randomInt = (m, n) =>
  parseInt(
    m + (n + 1 - m) * Math.random(),
    10,
  );
