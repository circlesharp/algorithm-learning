/**
 * captures the argument arg at the original call,
 * and puts it at the front of the arglist of the executing call.
 * @param {*} fun 
 * @param {*} arg1 
 */
const partial1 = (fun, arg) =>
  (...args) =>
    fun(arg, ...args);

const div = (n, d) => n / d;
const over10Part1 = partial1(div, 10);

console.log(
  over10Part1(5),
);

/**
 * Partially applying one or two arguments is typically
 * what you'll see in practice.
 * 
 * However, it would be useful to instead capture
 * an arbitrary number of argument for later execution.
 * 
 * @param {*} fun 
 * @param {*} arg1 
 * @param {*} arg2 
 */
const partial2 = (fun, arg1, arg2) =>
  (...args) =>
    fun(arg1, arg2, ...args);

const div10By2 = partial2(div, 10, 2);

console.log(
  div10By2(),
);
