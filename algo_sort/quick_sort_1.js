/*
 * @Author: Tan Rongzhao 
 * @Date: 2020-04-10 10:47:09 
 * @Last Modified by:   Tan Rongzhao 
 * @Last Modified time: 2020-04-10 10:47:09 
 */

const { insertionSortAux } = require('./insertion_sort')
const { generateRandomArray, testSort, swap } = require('../helper/sortTestHelper')

const threshold = 15

function quickSort (arr, n) {
  __quickSort(arr, 0, n - 1)
}

function __quickSort (arr, l, r) {
  if (l >= r) { return }
  const p = __partition(arr, l, r)
  __quickSort(arr, l, p - 1)
  __quickSort(arr, p + 1, r)
}

// __partition 在于返回 target 在 [l, r] 的正确索引
function __partition (arr, l, r) {
  const target = arr[l]
  let p = l
  // 另 arr[l, p] < target, arr[p + 1, i) > target
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < target) {
      swap(arr, ++p, i)
    }
  }
  swap(arr, l, p)
  return p
}

module.exports = quickSort

const main = () => {
  let n = 10000
  let arr = generateRandomArray(n, 0, n)
  testSort('quickSort', quickSort, arr, n)
}

if (require.main === module) {
  main()
}
