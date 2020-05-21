/*
 * @Author: Tan Rongzhao 
 * @Date: 2020-04-10 10:47:38 
 * @Last Modified by: Tan Rongzhao
 * @Last Modified time: 2020-04-10 10:48:23
 */

const { generateRandomArray, swap, testSort } = require('../helper/sortTestHelper')

const selectionSort = (arr, n) => {
  for (let i = 0; i < n; i++) {
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
  return arr
}


module.exports = selectionSort


const main = () => {
  let n = 100000
  let arr = generateRandomArray(n, 0, n)
  testSort('selectionSort', selectionSort, arr, n)
}

if (require.main === module) {
  main()
}
