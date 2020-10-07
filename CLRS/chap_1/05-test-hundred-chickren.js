const hundredChicken = () => {
  const pS = 0.5, pM = 2, pL = 3;
  const rst = [];
  const maxL = Math.floor(100 / pL);
  for (let l = 0; l <= maxL; l++) {
    const restSM = 100 - pL * l;
    const maxM = Math.floor(restSM / pM);
    for (let m = 0; m <= maxM; m++) {
      const restS = restSM - pM * m;
      if (restS % pS === 0) {
        const s = restS / pS;
        if (s + m + l === 100) rst.push([s, m, l]);
      }
    }
  }
  return rst;
}

/* 明显这样更易读 */
const anotherChicken = () => {
  const pS = 0.5, pM = 2, pL = 3;
  const rst = [];
  for (let s = 0; s <= 100; s++) {
    for (let m = 0; m <= 100; m++) {
      for (let l = 0; l <= 100; l++) {
        if (s + m + l === 100 && pS * s + pM * m + pL * l === 100)
          rst.push([s, m, l])
      }
    }
  }
  return rst;
}

console.log(
  hundredChicken(),
  anotherChicken()
);
