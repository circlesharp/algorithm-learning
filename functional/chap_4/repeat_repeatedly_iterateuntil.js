const _ = require('underscore');


/**
 * _.range 非常优秀
 */
const repeat = (time, VALUE) =>
  _.map(
    _.range(time),
    () => VALUE,
  );

const myRepeat = (time, VALUE) =>
  new Array(time).map(console.log);

console.log(
  repeat(12, 'circl'),
  myRepeat(12, 'amy'),
  _.range(12)
);

/*
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };
*/

/**
 * Use functions, not values
 * As a generic implementation of "repeatness",
 * it leaves sth to be desired.
 * This is, while a function that repeats a value some number of times is good,
 * a function that repeats a computation some number of times is better.
 */

const repeatedly = (times, fun) =>
  _.map(_.range(times), fun);

console.log(
  repeatedly(4, () => 'circl'),
  repeatedly(
    3,
    () => Math.floor((Math.random() * 10) + 1),
  ),
  repeatedly(3, i => `id - ${i}`),
);

/**
 * you may want to instead call a given function
 * until its return value crosses some threshold,
 * changes sign, becomes uppercase, and so on.
 * a simply value will not be sufficient.
 * 
 * feed-forward function:
 * the result of some call to the passed function
 * is fed into the next call of the function
 * as its argument.
 */

const iterateUntil = (fun, check, init) => {
  const ret = [];
  let result = fun(init);

  while (check(result)) {
    ret.push(result);
    result = fun(result);
  }

  return ret;
};

/**
 * Math.pow(base, exponent)
 */
console.log(
  iterateUntil(
    n => n * 2,
    n => n <= 1024,
    1,
  ),
  repeatedly(10, exp => Math.pow(2, exp + 1)),
);
