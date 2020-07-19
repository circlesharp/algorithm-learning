/**
 * 欧几里得算法
 * 获取最大公约数（GCD: greatest common divisor）
 * @param {Number} larger 
 * @param {Number} smaller 
 */
function EuclideanAlgorithm(larger, smaller) {
  const remainder = larger % smaller
  if (remainder === 0) {
    return smaller
  } else {
    return EuclideanAlgorithm(smaller, remainder)
  }
}

/**
 * START in-file test
 */
const main = () => {
  console.log(EuclideanAlgorithm(1680, 640))
}
if (require.main === module) {
  main()
}
/**
 * END in-file test
 */

