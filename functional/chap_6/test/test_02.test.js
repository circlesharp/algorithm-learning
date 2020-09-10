const { next } = require('../recursive_02');

const influences = [
  ['Lisp', 'Smalltalk'],
  ['Lisp', 'Scheme'],
  ['Smalltalk', 'Self'],
  ['Scheme', 'JavaScript'],
  ['Scheme', 'Lua'],
  ['Self', 'Lua'],
  ['Self', 'JavaScript']
];

test('find node\'s next node in a graph', () => {
  expect(next(influences, 'Lisp')).toEqual(["Smalltalk", "Scheme"]);
});
