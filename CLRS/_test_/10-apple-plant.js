/**
 * 放苹果
 * @param {Number} m 苹果数
 * @param {Number}} n 盘子数
 */
function f(m, n) {
  if (m <= 1 || n <= 1) return 1;
  if (n > m) return f(m, m);
  else return f(m, n - 1) + f(m - n, n);
}

console.log(f(100, 100));
