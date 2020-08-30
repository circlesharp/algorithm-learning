const curry = fun =>
  arg => fun(arg);

console.log(
  /* 
  complications arise using parseInt in a first-class way
  because of that optional second argument. */
  ['11', '11', '11', '11'].map(parseInt),
  ['11', '11', '11', '11'].map(curry(parseInt)),
);

/**
 * to be explicit when currying.
 * to explicit control the behavior of the function being called
 * by fixing or ignoring 
 * the optional right-learning arguments used for specialization.
 * 
 * @param {function} fun 
 */
const curry2 = fun =>
  secondArg =>
    firstArg =>
      fun(firstArg, secondArg);

const div = (n, d) => n / d;
const div10 = curry2(div)(10);

const parseBinaryString = curry2(parseInt)(2);

console.log(
  div10(50),
  ['11', '111', '10000000', '11111111'].map(parseBinaryString),
);
