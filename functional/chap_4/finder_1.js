const _ = require('underscore');

console.log(
  _.max([1, 2, 3, 4, 5]),
  _.max(
    [{name: "Fred", age: 65}, {name: "Lucy", age: 36}],
    p => p.age,
  ),
);

/**
 * 
 * @param {function} valueFun  to build a comparable value
 * @param {function} bestFun  to compare 2 values and return the "best" value
 * @param {array} coll 
 */
const finder = (valueFun, bestFun, coll) =>
  coll.reduce((best, current) => {
    const bestValue = valueFun(best);
    const currentValue = valueFun(current);
    return (bestValue === bestFun(bestValue, currentValue)) ? best : current;
  });

/* use case 1: max */
const myMax = finder(
  i => i,
  (best, current) => best >= current ? best : current,
  [1, 2, 3, 4, 2, 55, 2]
)

/* use case 2 */
// plucker => 采集器、拔毛机……
const plucker = FIELD =>
  obj => obj && obj[FIELD];

const myMaxAge = finder(
  plucker('age'),
  Math.max,
  [{name: "Fred", age: 65}, {name: "Lucy", age: 36}],
);

/* use case 3 */
const myCharAtL = finder(
  plucker('name'),
  (x, y) => x.charAt(0) === 'L' ? x : y,
  [{name: "Fred", age: 65}, {name: "Lucy", age: 36}],
);

console.log(
  myMax,
  myMaxAge,
  myCharAtL,
);
