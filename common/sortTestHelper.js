const { swap } = require('./utils')

/**
 * 常量，严格阈值，当超过阈值时候，不进行严格检测
 */
const strictThreshold = 10000

/**
 * 产生无序数组
 * @param {Number} n 数组长度 
 * @param {Number} rangeL 起（包含）
 * @param {Number} rangeR 止（包含）
 */
function generateRandomArray(n, rangeL, rangeR) {
  if ( rangeL >= rangeR ) { throw 'rangeL should smaller then rangeR' }
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = rangeL + Math.floor((rangeR - rangeL + 1) * Math.random())
  }
  return arr
}

/**
 * 产生近乎有序的数组
 * @param {Number} n 数组长度
 * @param {Number} swapTimes 交互次数（越少越接近有序）
 */
function generateNearlyOrderedArray(n, swapTimes) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = i
  }
  for (let i = 0; i < swapTimes; i++) {
    let posx = Math.floor(Math.random() * n)
    let posy = Math.floor(Math.random() * n)
    swap(arr, posx, posy)
  }
  return arr
}

/**
 * 检测数组是否有序
 * @param {String} sortName 方法名称（用于展示）
 * @param {Function} sortFunction 方法本身
 * @param {Array} arr 要排序的数组
 * @param {Number} n 要排序的数组的长度
 */
function testSort(sortName, sortFunction, originArr, n) {
  const startTime = new Date().getTime()
  const finalArr = sortFunction(originArr, n)
  const endTime = new Date().getTime()
  const time = (endTime - startTime) / 1000
  const strict = n <= strictThreshold
  const result = isSorted(finalArr, n) && isSortedStrict(originArr, finalArr, n)
  if (result) {
    console.log(`${sortName} 的运行时间为: ${time}\ts.\t${strict ? '' : '(未经严格测试)'}`)
  } else {
    console.log(`${sortName} 未通过测试。`)
  }
  return {
    sortName,
    result,
    time,
    strict,
    originArr,
    finalArr,
  }
}

function isSorted(testArr, n) {
  for (let i = 0; i < n; i++) {
    if (testArr[i] > testArr[i + 1]) {
      return false
    }
  }
  return true
}

const isSortedStrict = (arr, testArr, n) => {
  let sumOrigin = 0
  let sumTest = 0
  if (n > strictThreshold) { return true } // 大于10000不检查
  for (let i = 0; i < n; i++) {
    sumOrigin += arr[i]
    sumTest += testArr[i]
  }
  if (sumTest === sumOrigin) {
    return true
  }
}

module.exports = {
  generateRandomArray,
  generateNearlyOrderedArray,
  testSort
}


const main = () => {
  let n = 20
  let arr = generateRandomArray(n, 2, n)
  console.log(arr)
}

if (require.main === module) {
  main()
}
