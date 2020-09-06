const _ = require('underscore');
const { partial } = require('underscore');
const existy = n => n != null;

/**
 * 给函数一个 message 属性
 * 
 * @param {*} msg 
 * @param {*} fun 
 */
const validator = (msg, fun) => {
  const f = (...args) => fun(...args);
  f.message = msg;
  return f;
};

/**
 * every item in coll will map the fun that return a array,
 * and mapCat returns the whole array which concat all the arrays' items.
 * 
 * @param {function} fun => array
 * @param {array} coll 
 */
const mapCat = (fun, coll) => [].concat(...coll.map(fun));

/**
 * 谓词的结果的非
 * 
 * @param {function} pred 
 */
const complement = pred =>
  (...args) => !pred(...args);

const partial1 = (fun, arg) =>
  (...args) =>
    fun(arg, ...args);

const zero = validator('cannot be zero', n => 0 === n);
const number = validator('arg must be a number', _.isNumber);
const sqr = n => {
  if (!number(n)) throw new Error(number.message);
  if (zero(n)) throw new Error(zero.message);
  return n ** 2;
};

console.log(
  sqr(10),
  // sqr(0),
  // sqr('10'),
);

/**
 * return a function which return fun's return, if no error.
 * 
 * @param  {...function} validators 
 */
const condition1 = (...validators) =>
  (fun, arg) => {
    const errors = mapCat(
      (isValid) => isValid(arg) ? [] : [isValid.message],
      validators,
    );
    if (errors.length > 0) throw new Error(errors.join(', '));
    return fun(arg);
  };

/**
 * takes some validators, and
 * returns a function which could normally return what it should,
 * if no error.
 */
const sqrPre = condition1(
  validator('arg must not be zero', complement(zero)), // awesome! 取非
  validator('arg must be a number', number),
);

console.log(
  sqrPre(n => n, 10),
  // sqrPre(n => n, '10'),
  // sqrPre(n => n, 0),
);

const checkedSqr = partial1(sqrPre, n => n ** 2);

console.log(
  checkedSqr(10),
  // checkedSqr('10'),
  // checkedSqr(0),
);

/*
  The functions that compose other functions should be themselves compose
  可以自己组合自己
  */
const sillySquare = partial1(
  condition1(validator('should be even', (n) => n % 2 === 0)),
  checkedSqr,
);

// sillySquare(11)
