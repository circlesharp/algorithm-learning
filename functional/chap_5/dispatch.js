const _ = require('underscore');
const { invoker } = require('../chap_4/fun_return_other_fun');
const { invoke } = require('underscore');

const existy = x => x != null;
const always = VALUE =>
  () => VALUE;

/**
 * to compose multiple invokers together
 * to form polymorphic functions,
 * or functions that exhibit different behaviors
 * based on their arguments.
 * 
 * @param  {...function} funs 
 */
const dispatch = (...funs) => {
  const size = funs.length;
  return (target, ...args) => {
    for (let funIndex = 0; funIndex < size; funIndex++) {
      const fun = funs[funIndex];
      const ret = fun(target, ...args);
      if (existy(ret)) return ret;
    }
    return undefined;
  };
};

/* example 1 */
const str = dispatch(
  invoker('toString', Array.prototype.toString),
  invoker('toString', String.prototype.toString),
);

console.log(
  str('a'),
  str(_.range(10)),
);

/* example 2 */
const stringReverse = s => {
  if (!_.isString(s)) return undefined;
  return s.split('').reverse().join('');
};
const rev = dispatch(
  invoker('reverse', Array.prototype.reverse),
  stringReverse,
);

console.log(
  rev([1, 2, 3]),
  rev('abc'),
  rev(43),
)

/* example 3 */
const sillyReverse = dispatch(rev, always(42));

console.log(
  sillyReverse([1, 2, 3]),
  sillyReverse('abc'),
  sillyReverse(10),
);
