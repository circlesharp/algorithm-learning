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
  const L = new Array(n1).fill(null);
  const R = new Array(n2).fill(null);
  for (let i = 0; i < n1; i++) { L[i] = A[p + i] }
  for (let j = 0; j < n2; j++) { R[j] = A[q + j + 1] }
  console.log(L, R);
  L[n1] = Infinity;
  R[n2] = Infinity;
  let i = 0;
  let j = 0;
  for (let k = p; k <= r; k++) {
    if (L[i] < R[j]) A[k] = L[i++];
    else A[k] = R[j++];
    console.log(A[k], k)
  }
  return A;
}

const testArr = [2, 4, 5, 7, 1, 2, 3, 6];
console.log(
  merge(testArr, 0, 3, 7)
);
