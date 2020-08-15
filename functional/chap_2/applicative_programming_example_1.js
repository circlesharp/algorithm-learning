const _ = require('underscore');

/**
 * reduceRight
 */

const nums = [100, 2, 25];

console.log(
  nums.reduce((rst, i) => {
    // console.log(rst, i);
    return rst / i;
  })
)

/**
 * 如果归并的时候，不传第二个参数，就默认第一次的 rst 为数组第 0 位
 */
console.log(
  nums.reduce((rst, i) => {
    // console.log(rst, i);
    return rst / i;
  }, 10000)
)

console.log(
  _.reduceRight(nums, (rst, i) => rst / i)
)

/**
 * 一些应用 reduceRight
 */

function allOf (/* functions */) {
  return _.reduceRight(
    arguments,
    (truth, f) => truth && f(),
    true
  );
}

function anyOf (/* functions */) {
  return Array.from(arguments).reduce(
    (truth, f) => truth || f(),
    false
  );
}

const T = () => true;
const F = () => false;

console.log(
  allOf()
);

console.log(
  allOf(T, T)
);

console.log(
  allOf(T, T, T , T , F)
);

console.log(
  anyOf()
);

console.log(
  anyOf(T, T, F)
);
console.log(
  anyOf(F, F, F, F)
);

/**
 * reduce 牛逼在于，空数组可以直接不执行，返回第二个参数
 */
console.log(
  [].reduce((rst, i) => {
    console.log('inside', res, i);
    return [rst, i];
  }, 'second arg')
)
