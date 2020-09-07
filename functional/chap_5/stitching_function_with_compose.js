const _ = require('underscore');

const isNotString1 = str =>
  !_.isString(str);

const isNotString2 = _.compose(x => !x, _.isString);

console.log(
  isNotString1(1),
  isNotString1('1'),
  isNotString2(1),
  isNotString2('1'),
);

const test = _.compose(console.log, _.map);

/**
 * splat -> 啪嗒声(水摔到地上被打散)
 * 返回函数，可以打散数组
 * 
 * @param {*} fun 
 */
const splat = fun =>
  arr => fun(...arr);

/**
 * 合并多个成为一个数组
 * 
 * @param  {...any} args 
 */
const cat = (...args) => {
  if (args != null) {
    return [].concat(...args);
  }
}

const composedMapCat = _.compose(
  splat(cat), /* 给数组降一维 */
  _.map,
);

console.log(
  // test([[1,2],[3,4],[5]], n => n),
  composedMapCat([[1,2],[3,4],[5]], n => n),
  splat(cat)([[1,2],[3,4],[5]]),
)
