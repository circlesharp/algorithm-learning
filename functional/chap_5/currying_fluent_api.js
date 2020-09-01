const _ = require('underscore');

/*
The closer your code gets to looking like
a description of the activity that it's performing,
the better. */

const checker = (...validators) =>
  obj =>
    validators.reduce((errs, check) => {
      if (check(obj)) return errs;
      else return _.chain(errs).push(check.message).value();
    }, []);

const validator = (message, fun) => {
  const f = (...args) => fun(...args);
  f['message'] = message;
  return f;
};

const curry2 = fun =>
  secondArg =>
    firstArg =>
      fun(firstArg, secondArg);

const greaterThan = curry2((lhs, rhs) => lhs > rhs);
const lessThan = curry2((lhs, rhs) => lhs < rhs);
const withinRange = checker(
  validator('arg must be greater than 10', greaterThan(10)),
  validator('arg must be less than 20', lessThan(20)),
);

console.log(
  withinRange(15),
  withinRange(20),
  withinRange(1),
);
