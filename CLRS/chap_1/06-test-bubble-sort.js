const util = require('../util/arr');

const testArr = [1, 3, 2, 4, 7, 5, 0, 11, 3, 2,];

/*
BUBBLE-SORT(A)
n = A.length
for j = 1 to n-1
  for i = 1 to n-j
    if A[i] > A[i+1]
      exchange A[i] with A[i+1]
*/

const bubbleSort = A => {
  const n = A.length;
  for (let j = 0; j < n - 1; j++) {
    for (let i = 0; i < n - j; i++) {
      if (A[i] > A[i + 1]) util.swap(A, i, i + 1);
    }
  }
}

bubbleSort(testArr)
console.log(testArr);
