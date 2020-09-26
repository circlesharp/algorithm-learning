const util = require('../util/arr');

const testArr = [1, 3, 2, 4, 7, 5, 0, 11, 3, 2,];

const insertionSort = (arr) => {
  for (let j = 1; j < arr.length; j++) {
    const key = arr[j];
    let i = j - 1;
    while (arr[i] > key && i >= 0) {
      arr[i + 1] = arr[i];
      i--;
    }
    arr[i + 1] = key;
  }
  return arr;
};

console.log(
  insertionSort(testArr),
);
