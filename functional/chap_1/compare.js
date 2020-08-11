const _ = require('underscore');

const tests = [2, 3, -1, 6, 0, -108, 42, 10];

// 方法1
// tests.sort(function(x, y) {
//   if (x < y) return -1;
//   if (y > x) return 1;
//   return 0;
// })

// 方法2
// function compareLessThanOrEqual(x, y) {
//   if (x < y) return -1;
//   if (y > x) return 1;
//   return 0;
// }
// console.log([1, 1].sort(compareLessThanOrEqual));

// if (_.contains([0, 1], compareLessThanOrEqual(1, 1))) {
//   console.log('less or equal');
// }

// 方法3
function lessOrEqual(x, y) { return x <= y } // 谓词（只返回布尔值）

function comparator(pred) {
  return function(x, y) {
    console.log(x, y, pred(x, y), pred(y, x))
    if (pred(x, y)) return -1;
    else if (pred(y, x)) return 1;
    return 0;
  };
}

// console.log(tests.sort(comparator(lessOrEqual)));
// console.log(tests.sort(comparator(_.isEqual)));

const t = tests.sort((a, b) => {
  return a === b;
})

console.log(t, tests);

