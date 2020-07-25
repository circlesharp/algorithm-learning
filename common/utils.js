/**
 * 得到 base-2 logarithm, in JS, Math.log's base is Math.E
 * @param {Number} logarithm 
 * @param {Boolean} ceil 是否需要向上取整
 */
function binLog(logarithm, ceil = false) {
  const exponent = Math.log(logarithm) / Math.log(2)
  if (ceil) {
    return Math.ceil(exponent)
  }
  return exponent
}

/**
 * 找到数组里面的最小值 -> { smallestIndex, smallestValue }
 * @param {Array} arr 
 */
function findSmallest(arr) {
  let smallestValue = arr[0]
  let smallestIndex = 0
  arr.forEach((item, idx) => {
    if (item < smallestValue) {
      smallestValue = item
      smallestIndex = idx
    }
  })
  return { smallestIndex, smallestValue }
}

/**
 * 产生一定范围内的随机整数
 * 原理: delta + 1 是因为，在 delta 中的 concrete 的点会比 delta 多一。
 * 要解决这个问题，就是使用地板除法
 * 如果不 + 1， 端点的两个整数(rangeL, rangeR)出现的概率，数学意义上是 0。
 * @param {Number} rangeL 随机整数的最小值（包含）
 * @param {Number} rangeR 随机整数的最大值（包含）
 */
function randomInt(rangeL, rangeR) {
  return rangeL + Math.floor((rangeR - rangeL + 1) * Math.random())
}

/**
 * 数组交换元素，原数组上交换，不产生副本
 * @param {Array} arr 
 * @param {Number} mate 
 * @param {Number} anotherMate 
 */
function swap(arr, mate, anotherMate) {
  let temp = arr[mate]
  arr[mate] = arr[anotherMate]
  arr[anotherMate] = temp
}

/**
 * 把数组中的多个内容打印出来
 * @param {Array} needToPrints 
 */
function printAll(needToPrints) {
  needToPrints.forEach(i => console.log(i))
}

module.exports = {
  binLog,
  findSmallest,
  swap,
  randomInt,
  printAll,
}

/**
 * START in-file test
 */
const main = () => {
  needToPrints = []
  for (let i = 0; i < 10; i++) {
    needToPrints.push(randomInt(1, 6))
  }
  printAll(needToPrints)
}
if (require.main === module) {
  main()
}
/**
 * END in-file test
 */
