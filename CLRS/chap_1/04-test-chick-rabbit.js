const fC = 3;
const fR = 4;

const solveMin = n => {
  const maxC = Math.floor(n / fC);
  for (let i = 0; i <= maxC; i++) {
    const rest = n - (fC * i);
    if (rest % fR === 0) return (rest / fR + i);
  }
  if (n % fC === 0) return n / fC;
  return false;
}

const solveMax = n => {
  const maxR = Math.floor(n / fR);
  for (let i = 0; i <= maxR; i++) {
    const rest = n - i * fR;
    if (rest % fC === 0) return (rest / fC + i);
  }
  if (n % fR === 0) return n / fR;
  return false;
}

const solve = n => 
  [solveMin(n), solveMax(n)];

const getSolution = (n, ...groups) => {
  if (groups.length !== n) throw new Error('fuck!');
  const rst = Array(n);
  groups.forEach((n, i) => {
    rst[i] = solve(n);
  });
  return rst;
}

console.log(
  getSolution(2, 3, 22)
)
