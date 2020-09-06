const _ = require('underscore');

/**
 * find
 */

// Number 的 isNaN 只有这个值真的为 NaN 才可以
console.log(
  _.find(['a', 'b', 3, 'd'], Number.isNaN)
)

// 全局的 isNaN 只要不是数字都是 true
console.log(
  _.find(['a', 'b', 3, 'd'], isNaN)
)

// _.isNumber
console.log(
  _.find(['a', 'b', 3, 'd'], _.isNumber)
)

/**
 * reject(opposite of filter / inject)
 * also, complement
 */

console.log(
  _.reject(['a', 'b', 3, 'd'], _.isNumber)
)

const complement = pred =>
  function() {
    // 太牛逼了，arguments是类数组，所以得转成数组
    // return !pred.apply(null, Array.from(arguments));
    return !pred.call(null, ...Array.from(arguments));
  }

/* another way for complement */
/*
const complement = pred =>
  (...args) => !pred(...args);*/

console.log(
  ['a', 'b', 3, 'd'].filter(complement(_.isNumber))
)

/**
 * all, any === some
 */

console.log(
  _.all([1, 2, 3, 4], _.isNumber)
)

console.log(
  _.some([1, 2, 'c', 4], _.isNumber),
  _.any([1, 2, 'c', 4], _.isNumber)
)
