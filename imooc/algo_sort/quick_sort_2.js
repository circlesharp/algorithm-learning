/*
 * @Author: Tan Rongzhao 
 * @Date: 2020-04-10 10:47:30 
 * @Last Modified by:   Tan Rongzhao 
 * @Last Modified time: 2020-04-10 10:47:30 
 */

const { insertionSortAux } = require('./insertion_sort')
const { generateRandomArray, testSort, swap } = require('../helper/sortTestHelper')

const threshold = 15

function quickSort (arr, n) {
  __quickSort(arr, 0, n - 1)
}

function __quickSort (arr, l, r) {
  if (r - l <= threshold) {
    insertionSortAux(arr, l, r)
    return
  }

  const p = __partition(arr, l, r)
  __quickSort(arr, l, p - 1)
  __quickSort(arr, p + 1, r)
}

function __partition (arr, l, r) {
  let t = l + Math.floor((r - l + 1) * Math.random())
  swap(arr, l, t)
  const target = arr[l]

  // arr[l+1, p], target, arr[p+1, i)
  let p = l
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < target) {
      swap(arr, i, p + 1)
      p++
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
