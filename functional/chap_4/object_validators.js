const _ = require('underscore');

/**
 * takes a number of predicates and
 * returns a validation function.
 * 
 * @param  {...any} validators a number of predicates.
 * 
 * Add a “chain” function.
 * Start chaining a wrapped Underscore object.
 * Using .value to get the value.
 */
const checker = (...validators) =>
  obj =>
    validators.reduce((errs, check) => {
      if (check(obj)) return errs;
      else return _.chain(errs)
          .push(check.message)
          .value();
    }, []);

/**
 * return a function that
 * return the same args.
 * @param {boolean} VALUE 
 */
const always = VALUE =>
  () => VALUE;

const passes = always(true);
const fails = always(false);
fails.message = 'a failure in life'

const alwaysPasses = checker(passes, passes);
const alwaysFails = checker(fails);

console.log(
  alwaysPasses({}),
  alwaysFails({}),
);

/**
 * return a function that
 * with a message property.
 * 
 * @param {string} message 
 * @param {function} fun 
 */
const validator = (message, fun) => {
  const f = (...args) => fun(...args);
  f['message'] = message;
  return f;
};

const gonnaFail = checker(validator('wtf!', always(false)));

console.log(
  gonnaFail(100),
  gonnaFail([]),
);

/* isolate the definition of individual 'checkers', */
/* rather than defining them in place. */

const aMap = obj => _.isObject(obj);
const checkCommand = checker(validator('must be a map', aMap));

console.log(
  checkCommand({}),
  checkCommand(42),
);

/**
 * The purpose of the function hasKeys is
 * to provide an execution configuration to fun.
 * 
 * @param  {...string} KEYS 
 */
const hasKeys = (...KEYS) => {
  const fun = obj =>
    _.every(KEYS, k => _.has(obj, k));
  fun.message = `Must have values for keys: ${KEYS.join(' ')}`;
  return fun;
};

const checkCommand2 = checker(
  validator('Must be a map', aMap),
  hasKeys('mag', 'type'),
);

console.log(
  checkCommand2({ msg: 'blash', type: 'display' }),
  checkCommand2(32),
  checkCommand2({}),
);
