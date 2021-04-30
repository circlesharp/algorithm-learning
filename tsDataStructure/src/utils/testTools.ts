export function genRandomIntArray(size: number = 10, randomItemGenerator?): Array<number> {
  const arr = [];
  let element;

  for (let i = 0; i < size; i++) {
    if (randomItemGenerator) {
      element = randomItemGenerator();
    } else {
      element = randomInt(1, 100);
    }

    arr.push(element);
  }

  return arr;
}

export function genOrderedIntArray(size: number = 10, startFrom: number = 0): Array<number> {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(i + startFrom);
  }

  return arr;
}

function randomInt(rangeL: number, rangeR: number): number {
  return rangeL + Math.floor((rangeR - rangeL + 1) * Math.random());
}
