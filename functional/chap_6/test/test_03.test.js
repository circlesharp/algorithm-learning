const _ = require('underscore');

const { depthSearch } = require('../recursive_03_depth_search');
const { cat, construct } = require('../../chap_2/applicative_programming_example_4');

const influences = [
  ['Lisp', 'Smalltalk'],
  ['Lisp', 'Scheme'],
  ['Smalltalk', 'Self'],
  ['Scheme', 'JavaScript'],
  ['Scheme', 'Lua'],
  ['Self', 'Lua'],
  ['Self', 'JavaScript']
];

test('depth search', () => {

  expect(depthSearch(influences, ['Lisp'], []))
    .toEqual(["Lisp", "Smalltalk", "Self", "Lua", "JavaScript", "Scheme"]);

  expect(depthSearch(influences, ['Smalltalk', 'Self'], []))
    .toEqual(["Smalltalk", "Self", "Lua", "JavaScript"]);
    
  expect(depthSearch(construct(['Lua','Io'], influences), ['Lisp'], []))
    .toEqual( ["Lisp", "Smalltalk", "Self", "Lua", "Io", "JavaScript", "Scheme"]);
});
