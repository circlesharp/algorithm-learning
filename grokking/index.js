const { testSort, generateRandomArray, generateNearlyOrderedArray } = require('../common/sortTestHelper')
const { selectionSort } = require('./chap_2/selection_sort')
const { quickSort: quick_sort_test } = require('./chap_4/quick_sort_test')
const { quickSort } = require('./chap_4/quick_sort')

const n = 20000
const arr = generateRandomArray(n, 0, n)
const nearlyOrderedArr = generateNearlyOrderedArray(n, 10)

const res1 = testSort('selectionSort', selectionSort, arr, n)
const res2 = testSort('quick_sort_test', quick_sort_test, arr, n)
const res3 = testSort('quickSort', quickSort, arr, n)
const res4 = testSort('quickSort-nearly-order', quickSort, nearlyOrderedArr, n)

// console.log(res2)
