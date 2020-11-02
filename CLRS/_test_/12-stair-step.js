/**
 * m步走n级台阶，有多少种方法
 * @param {number} n stair
 * @param {number} m step 
 */
function step(n, m) {
  if (n < m || n < 1 || m < 1) return 0;
  if (n === 1 && m === 1) return 1;
  if (n === 2 && m === 1) return 1;
  if (n === 2 && m === 2) return 1;
  return step(n - 1, m - 1) + step(n - 2, m - 1);
}

console.log(step(16, 10)); // 210
