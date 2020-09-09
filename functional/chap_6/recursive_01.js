const _ = require('underscore');
const { cat, construct } = require('../chap_2/applicative_programming_example_4');

const second = arr => arr[1];

/* certain values are built from subproblem of a larger problem. */
const myLength = arr => {
  if (_.isEmpty(arr)) return 0;
  else return 1 + myLength(_.rest(arr));
};

const cycle = (times, ary) => {
  if (times <= 0) return [];
  else return cat(ary, cycle(times - 1, ary));
};

const zip = (arr1, arr2) => {
  const length = arr1.length;
  const rst = [];
  if (arr1.length !== arr2.length) throw new Error('2 array\'s length must be equal.');
  for (let i = 0; i < length; i++) {
    rst.push([arr1[i], arr2[i]]);
  }
  return rst;
}

/**
 * 
 * @param {array} pair [i1, i2]
 * @param {array 2 dimension} rests [[], []]
 */
const constructPair = (pair, rests) =>
  [
    construct(_.first(pair), _.first(rests)),
    construct(second(pair), second(rests)),
  ];

const unzip = pairs => {
  if (_.isEmpty(pairs)) return [[], []];
  return constructPair(
    _.first(pairs),
    unzip(_.rest(pairs)),
  );
}

/*

::: the rules of self-recursive functions
1. Know when to stop;
2. Decide how to take one step;
3. Break the problem into that step and a smaller problem.
:::

*/

module.exports = {
  myLength,
  cycle,
  zip,
  constructPair,
  unzip,
};
