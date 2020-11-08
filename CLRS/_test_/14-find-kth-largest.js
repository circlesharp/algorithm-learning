function findKthLargest(arr, k) {
  const e = arr[0];
  const n = arr.length;
  const left = [];
  const right = [];
  for (let i = 1; i < n; i++) {
    if (arr[i] < e) left.push(arr[i]);
    else right.push(arr[i]);
  }
  const lengthLeft = left.length;
  if (lengthLeft === k - 1) return e;
  if (lengthLeft >= k) return findKthLargest(left, k);
  else return findKthLargest(right, k - lengthLeft - 1);
}

function getMedian(arr) {
  if (arr.length % 2 === 1)
    return findKthLargest(arr, Math.ceil(arr.length / 2));
  return (findKthLargest(arr, arr.length / 2) + findKthLargest(arr, arr.length / 2 + 1)) / 2;
}

const testArrOdd = [6, 5, 9, 8, 2, 1, 7, 3, 4];
const testArrEven = [6, 5, 9, 8, 2, 1, 7, 3];

console.log(
  getMedian(testArrOdd),
  getMedian(testArrEven),
);
