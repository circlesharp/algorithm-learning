const { generateRandomArray, generateNearlyOrderedArray, testSort } = require('./helper/sortTestHelper')

const selectionSort = require('./algo_sort/selection_sort')
const { insertionSortV8: insertionSort } = require('./algo_sort/insertion_sort')
const mergeSort = require('./algo_sort/merge_sort')
const quickSort = require('./algo_sort/quick_sort_1')

const n = 1000000
const arr = generateRandomArray(n, 0, n)
// let arr = generateNearlyOrderedArray(n, 100)
// testSort('selectionSort', selectionSort, arr, n)
// testSort('insertionSort', insertionSort, arr, n)
testSort('mergeSort', mergeSort, arr, n)
testSort('quickSort', quickSort, arr, n)