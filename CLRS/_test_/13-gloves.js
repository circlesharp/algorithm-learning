/**
 * 从n双手套取(n+1)只，恰好2双同色
 * 等价于：从n双手套取(n-1)只，都不同色
 * @param {number} n 手套的双数
 */
function gloves(n) {
  if (n <= 2) return 4;
  return gloves(n - 1) * 4;
}

console.log(gloves(6)); // 360, but wrong, the answer is 480
