/*
MERGE(A, p, q, r)
n1 = q - p + 1
n2 = r - q
let L[1 .. n1 + 1] and R[1 .. n2 + 1] be new arrays
for i in 1 to n1
  L[i] = A[p + i - 1]
for j in 1 to n2
  R[j] = A[q + j]
L[n1 + 1] = Inf
R[n2 + 1] = Inf
i = 1
j = 1
for k = p to r
  if L[i] <= R[j]
    A[k] = L[i]
    i = i + 1
  else
    A[k] = R[j]
    j = j + 1
*/

const merge = (A, p, q, r) => {
  const n1 = q - p + 1;
  const n2 = r - q;
  const L = new Array(n1 + 1).fill(null);
  const R = new Array(n2 + 1).fill(null);
  for (let i = 0; i < n1; i++) {
    L[i] = A[p + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = A[q + j + 1];
  }
  L[n1] = Infinity;
  R[n2] = Infinity;
  let i = 0;
  let j = 0;
  for (let k = p; k <= r; k++) {
    if (L[i] < R[j]) A[k] = L[i++];
    else A[k] = R[j++];
  }
}

/*
MERGE(A, p, q, r)
第二种写法
*/
// const merge = (A, p, q, r) => {
//   const n1 = q - p + 1;
//   const n2 = r - q;
//   const L = new Array(n1);
//   const R = new Array(n2);
//   for (let i = 0; i < n1; i++) L[i] = A[p + i];
//   for (let j = 0; j < n2; j++) R[j] = A[q + j + 1];
//   let [i, j] = [0, 0];
//   for (let k = p; k <= r; k++) {
//     if (i >= n1) A[k] = R[j++];
//     else if (j >= n2) A[k] = L[i++];
//     else if (L[i] < R[j]) A[k] = L[i++];
//     else A[k] = R[j++];
//   }
// };

/*
MERGE-SORT(A, p, r)
if p < r
  let q = floor((p + r) / 2)
  MERGE-SORT(A, p, q)
  MERGE-SORT(A, q + 1, r)
  MERGE(A, p, q, r)
*/
const mergeSort = (A, p, r) => {
  if (p >= r) return;
  const q = Math.floor((p + r) / 2);
  mergeSort(A, p, q);
  mergeSort(A, q + 1, r);
  merge(A, p, q, r);
}

const testArr = [2, 4, 56, 100, 3, 1, 62, 10, 5, 7, 1, 2, 3, 6];
mergeSort(testArr, 0, testArr.length - 1);

console.log(testArr);
