/*
 * @Author: Tan Rongzhao 
 * @Date: 2020-04-10 10:47:09 
 * @Last Modified by: Tan Rongzhao
 * @Last Modified time: 2020-04-10 10:48:11
 */

const { insertionSortAux } = require('./insertion_sort')
const { generateRandomArray, testSort } = require('../helper/sortTestHelper')

const threshold = 15

// 自顶向下的归并排序
function mergeSort (arr, n) {
  __mergeSort(arr, 0, n-1)
}

// 自底向上的归并排序（没有通过索引访问值，适合链表？）
function mergeSortBU (arr, n) {
  // 归并的 size 每次迭代增大一倍
  for (let size = 1; size < n; size *= 2) {
    // 对每一组 arr[i ... (i + size - 1) ... (i + 2 * size - 1)] 归并
    for (let i = 0; i + size < n; i += 2 * size) {
      __merge(arr, i, i + size - 1, Math.min((i + 2 * size - 1), n - 1))
    }
  }
}

// 对 arr[l...r]排序
function __mergeSort (arr, l, r) {
  // if (l >= r) { return }
  if (r - l <= threshold) { // 每个递归都可以优化递归边界
    insertionSortAux(arr, l, r)
    return
  }

  const mid = (r + l) / 2 | 0
  __mergeSort(arr, l, mid)
  __mergeSort(arr, mid + 1, r)
  if ( arr[mid] > arr[mid + 1]) {
    __merge(arr, l, mid, r) // 合并的前提是，左右两边没有合并，也就是 max(l) > min(r)
  }
}

// 对arr[l...mid...r]归并
function __merge (arr, l, mid, r) {
  const aux = []
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i]
  }

  let i = l
  let j = mid + 1
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l]
      j++
    } else if (j > r) {
      arr[k] = aux[i - l]
      i++
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l]
      i++
    } else {
      arr[k] = aux[j - l]
      j++
    }
  }
}

module.exports = mergeSort

const main = () => {
  let n = 10000
  let arr = generateRandomArray(n, 0, n)
  testSort('mergeSort', mergeSort, arr, n)
  testSort('mergeSortBU', mergeSortBU, arr, n)
}

if (require.main === module) {
  main()
}
