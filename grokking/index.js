const { testSort, generateRandomArray } = require('../common/sortTestHelper')
const { selectionSort } = require('./chap_2/selection_sort')

const n = 10000
const arr = generateRandomArray(n, 0, n)

const res = testSort('selectionSort', selectionSort, arr, n)
