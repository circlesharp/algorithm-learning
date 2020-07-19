/**
 * START 使用循环找到划分正方形土地的解
 */
const LENGTH = 1680
const WIDTH = 640
const ways = []
for (let i = 0; i < LENGTH; i++) {
  if (LENGTH % i !== 0) {
    continue
  }
  for (let j = 0; j < WIDTH; j++) {
    let n = LENGTH / i
    if (n === WIDTH / j) {
      ways.push(n)
    }
  }
}
/**
 * END 使用循环找到划分正方形土地的解
 */

/**
 * START 递归求加法
 */
function recursive_sum(arr) {
  if (arr.length === 0) { return 0 }
  if (arr.length === 1) { return arr[0] }
  return arr[0] + recursive_sum(arr.slice(1))
}
console.log(recursive_sum([1, 2, 3, 4, 5, 6]))
/**
 * END 递归求加法
 */
