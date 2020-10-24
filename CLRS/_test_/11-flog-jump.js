function jump(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return jump(n - 1) + jump(n - 2);
}

console.log(jump(5));
