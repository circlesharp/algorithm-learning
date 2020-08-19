const _ = require('underscore');

['whiskey', 'tango', 'foxtrot'].forEach(function(word) {
  console.log(word.charAt(0).toUpperCase() + word.substr(1));
})

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const arr = [
  { a: 1 },
  { a: 2 },
  { a: 3 },
]

console.log(
  _.omit(obj, ['a', 'c']),
  _.without(arr, arr[1])
)
