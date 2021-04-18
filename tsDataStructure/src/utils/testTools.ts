export function genRandomIntArray(size: number = 10, randomItemGenarator?): Array<number> {
  const arr = [];
  let element;

  for (let i = 0; i < size; i++) {
    if (randomItemGenarator) {
      element = randomItemGenarator();
    } else {
      element = randomInt(1, 100);
    }

    arr.push(element);
  }

  return arr;
}

function randomInt(rangeL: number, rangeR: number): number {
  return rangeL + Math.floor((rangeR - rangeL + 1) * Math.random());
}
