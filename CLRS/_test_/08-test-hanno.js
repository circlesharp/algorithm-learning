let cnt = 0;

function hanno(from, to, passby, n) {
  if (n === 1) return move(from, to);
  hanno(from, passby, to, n - 1);
  move(from, to);
  hanno(passby, to, from, n - 1);
  return;
}

function move(from, to) {
  console.log(`${from} => ${to}`);
  cnt += 1;
}

hanno('a', 'c', 'b', 4);
console.log(cnt);
