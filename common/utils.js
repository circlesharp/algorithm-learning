const { fun } = require("../grokking/chap_2/selection_sort")

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

module.exports = {
  binLog,
  findSmallest,
}

/**
 * START in-file test
 */
const main = () => {
  console.log(findSmallest([1, 2,-1,4,0,4]))
}
if (require.main === module) {
  main()
}
/**
 * END in-file test
 */
