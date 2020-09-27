const util = require('../util/arr');
const testArr = [1, 3, 2, 4, 7, 5, 0, 11, 3, 2,];

/*
SELECTION-SORT(A)
n = A.length
for j = 1 to n - 1
  smallest = j
  for i = j + 1 to n
    if A[i] < A[smallest]
      smallest = i
  exchange A[i] with A[smallest]
*/

const selectionSort = arr => {
  const n = arr.length;
  for (let j = 0; j < n - 1; j++) {
    let smallest = j;
    for (let i = j + 1; i < n; i++) {
      if (arr[i] < arr[smallest]) smallest = i;
    }
    util.swap(arr, smallest, j);
  }
  return arr;
};

console.log(
  selectionSort(testArr),
);

