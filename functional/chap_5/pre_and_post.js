const _ = require('underscore');

const mapCat = (fun, coll) =>
  [].concat(..._.map(coll, fun));

const validator = (msg, pred) => {
  const f = (...args) => pred(...args);
  f.message = msg;
  return f;
}

const condition1 = (...validators) =>
  (fun, arg) => {
    const errors = mapCat(
      valid => valid(arg) ? [] : [valid.message],
      validators,
    );
    if (errors.length > 0) throw new Error(errors.join(', '));
    return fun(arg);
  };

const partial1 = (fun, ...args) =>
  (...params) =>
    fun(...args, ...params);

const sqrPost = condition1(
  validator("result should be a number", _.isNumber),
);

console.log(
  // sqrPost(n => n, 0),
  // sqrPost(n => n, -1),
  // sqrPost(n => n, ''),
  sqrPost(n => n, 100),
);

const sqrPre = condition1(
  validator("arg should not be zero", n => n !== 0),
);

const checkedSqr = partial1(sqrPre, n => n ** 2);

console.log(
  checkedSqr(10),
);

/* 很秀，太漂亮了，partial 牛逼 */
const megaCheckedSqr = _.compose(partial1(sqrPost, n => n), checkedSqr);

console.log(
  megaCheckedSqr(10),
)
