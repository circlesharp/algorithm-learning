const strictThreshold = 10000

const generateRandomArray = (n, rangeL, rangeR) => {
  if ( rangeL >= rangeR ) { throw 'rangeL should smaller then rangeR' }
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = rangeL + Math.floor((rangeR - rangeL + 1) * Math.random())
  }
  return arr
}

const generateNearlyOrderedArray = (n, swapTimes) => {
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

const testSort = (sortName, sortFunction, arr, n) => {
  const testArr = arr.slice()
  const startTime = new Date().getTime()
  sortFunction(testArr, n)
  const endTime = new Date().getTime()
  const isStrict = n > strictThreshold ? '(未进行严格测试)' : ''
  if (isSorted(testArr, n) && isSortedStrict(arr, testArr, n)) {
    console.log(`${sortName} 的运行时间为: ${(endTime - startTime) / 1000}\ts.\t${isStrict}`)
  } else {
    console.log(`${sortName} 未通过测试。`)
  }
}

const isSorted = (testArr, n) => {
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

const swap = (arr, mate, anotherMate) => {
  let temp = arr[mate]
  arr[mate] = arr[anotherMate]
  arr[anotherMate] = temp
}


module.exports = {
  generateRandomArray,
  generateNearlyOrderedArray,
  swap,
  testSort
}


const main = () => {
  let n = 20
  let arr = generateNearlyOrderedArray(n, 3)
  console.log(isSorted(arr, n), arr)
}

if (require.main === module) {
  main()
}
