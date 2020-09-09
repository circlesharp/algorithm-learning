const _ = require('underscore');
const {
  myLength,
  cycle,
  zip,
  constructPair,
  unzip,
} = require('../recursive_01');

test('recursion: get array\'s length', () => {
  expect(myLength([1,2,3,4,5])).toBe(5);
  expect(myLength(_.range(10))).toBe(10);
  expect(myLength([])).toBe(0);
});

test('recursive functions should not change the arguments given them', () => {
  const a = _.range(10);
  const l = myLength(a);
  expect(a).toEqual(_.range(10));
  expect(l).toBe(10);
});

test('cycle', () => {
  const arr = [1, 2, 3];
  const time = 3;
  const cycleArr = cycle(time, arr);
  expect(cycleArr.length).toBe(arr.length * time);
  expect(cycleArr).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
});

test('zip', () => {
  expect(zip(['a', 'b', 'c'], [1, 2, 3])).toEqual([['a', 1], ['b', 2], ['c', 3]]);
  expect(zip(['a'], [1])).toEqual([['a', 1]]);

  /* 要稍稍包装一下下，或者用 bind */
  expect(() => {zip([1], [1, 2])}).toThrow(Error);
  expect(zip.bind(null, [1], [1, 2])).toThrow("2 array's length must be equal.");
});

test('unzip', () => {
  const terminalCase = [[], []];
  expect(constructPair(['a', 1], [[], []])).toEqual([['a'], [1]]);
  expect(unzip(zip([1,2,3],[4,5,6]))).toEqual([[1,2,3],[4,5,6]]);
})
