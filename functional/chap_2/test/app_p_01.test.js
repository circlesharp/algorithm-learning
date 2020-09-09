const { cat, construct } = require('../applicative_programming_example_4');

test('cat: [], [], [], [] => []', () => {
  const a = [12, 34];
  const b = [1, 2, 3];
  expect(cat(a, b)).toEqual([12, 34, 1, 2, 3]);
  expect(a).toEqual([12, 34]);
  expect(b).toEqual([1, 2, 3]);
});

test('construct: item, [] => []', () => {
  const a = 1;
  const b = [2, 3];
  expect(construct(a, b)).toEqual([1, 2, 3]);
});
