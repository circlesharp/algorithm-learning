/*
 * @Author: Tan Rongzhao 
 * @Date: 2020-04-10 10:47:09 
 * @Last Modified by: Tan Rongzhao
 * @Last Modified time: 2020-04-10 10:47:55
 */

const { generateRandomArray, generateNearlyOrderedArray, swap, testSort } = require('../../common/sortTestHelper')

const insertionSortV1 = (arr, n) => {
  for (let i = 1; i < n; i++) {
    let minIndex = i
    for (let j = i - 1; j >= 0; j--) {
      if (arr[minIndex] < arr[j]) {
        swap(arr, minIndex, j)
        minIndex = j
      } else {
        break
      }
    }
  }
  return arr
}


// 最简洁直观的版本
const insertionSortV2 = (arr, n) => {
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      swap(arr, j, j - 1)
    }
  }
}

const insertionSortV3 = (arr, n) => {
  for (let i = 1; i < n; i++) {
    let temp = arr[i]
    let index
    for (let j = i; j > 0; j--) {
      if (temp < arr[j - 1]) {
        arr[j] = arr[j - 1]
      } else {
        index = j
      }
    }
    arr[index] = temp
  }
  return arr
}

// 效率最高的版本
// e 代表 无处安放的灵魂
// j 代表 灵魂的位置
// j - 1 代表 不能够丢失的信息
const insertionSortV4 = (arr, n) => {
  for (let i = 1; i < n; i++) {
    let e = arr[i]
    let j
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = e
  }
  return arr
}

// 重写版本1
const insertionSortV5 = (arr, n) => {
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1)
      } else {
        break
      }
    }
  }
  return arr
}

// 重写版本1（2）
const insertionSortV6 = (arr, n) => {
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      swap(arr, j, j - 1)
    }
  }
  return arr
}

// 重写版本4
const insertionSortV7 = (arr, n) => {
  for (let i = 1; i < n; i++) {
    let j
    for (j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        arr[j] = arr[j - 1]
      } else {
        arr[j - 1] = arr[i]
        break
      }
    }
  }
  return arr
}

// 重写版本4(2)
const insertionSortV8 = (arr, n) => {
  for (let i = 1; i < n; i++) {
    let e = arr[i]
    let j
    for (j = i; j > 0; j--) {
      if (e < arr[j - 1]) {
        arr[j] = arr[j - 1]
      } else {
        break
      }
    }
    arr[j] = e
  }
  return arr
}

// 用于被其他排序算法使用
function insertionSortAux (arr, l, r) {
  for (let i = l + 1; i <= r; i++) {
    let e = arr[i]
    let j
    for (j = i; j > l; j--) { // 这里中间绝不能 j >= l, 因为有可能会交换范围外的元素
      if (e < arr[j - 1]) {
        arr[j] = arr[j - 1]
      } else {
        break
      }
    }
    arr[j] = e
  }
}

function __insertionSortAux (arr, n) {
  arr.unshift(-1)
  arr.push(10000000)
  console.log(arr)
  insertionSortAux(arr, 0, n+1)
  console.log(arr)
}

module.exports = { insertionSortV8, insertionSortAux }


const main = () => {
  let n = 10
  let arr = generateRandomArray(n, 0, n)
  // let arr = generateNearlyOrderedArray(n, 100)
  testSort('insertionSortV1', insertionSortV1, arr, n)
  testSort('insertionSortV2', insertionSortV2, arr, n)
  // testSort('insertionSortV3', insertionSortV3, arr, n) // 错误的
  testSort('insertionSortV4', insertionSortV4, arr, n)
  testSort('insertionSortV5', insertionSortV5, arr, n)
  testSort('insertionSortV6', insertionSortV6, arr, n)
  testSort('insertionSortV7', insertionSortV7, arr, n) // 错的，但是为啥没有检测出来呢？
  testSort('insertionSortV8', insertionSortV8, arr, n)
  testSort('insertionSortAux', __insertionSortAux, arr, n)
}

if (require.main === module) {
  main()
}
