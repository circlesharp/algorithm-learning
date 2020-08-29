const _ = require('underscore');

/**
 * the use of a function returning a constant is so useful
 * that it's almost a design pattern for FP
 * and is often simply called k (always).
 */

const always = VALUE =>
  () => VALUE;

/**
 * First, a closure will capture a single value (or reference) and repeatedly return the same value.
 * A second important note about closure is that each new closure captures a different value than every other.
 */

const f = always(function(){});
const g = always(function(){});

console.log(
  f() === f(), // repeatedly return the same value.
  f() === g(), // each new closure captures a different value than every other.
)

/**
 * the always fun is what's known as a combinator (组合子).
 * zhihu: https://www.zhihu.com/question/20115649
 */

const repeatedly = (times, fun) =>
  _.map(_.range(times), fun);

console.log(
  // repeatedly(3, always('circl')),
);

/**
 * invoker
 * takes a method and returns a function
 * that will invoke that method on any object given.
 * 
 * functional style prefers
 * functions taking the invocation target as an argument.
 */

const existy = x =>
  x != null;

const truthy = x =>
  x !== false && existy(x);

const doWhen = (cond, action) => {
  if (truthy(cond)) return action();
  return undefined;
}

const invoker = (NAME, METHOD) =>
  (target, ...args) => {
    const targetMethod = existy(target) && target[NAME];
    return doWhen(
      (existy(targetMethod) && METHOD === targetMethod),
      () => targetMethod.apply(target, args),
    );
  };

const rev = invoker('reverse', Array.prototype.reverse)

// functional style prefers functions taking the invocation target as an argument
console.log(
  // _.map([[1, 2, 3]], rev),
);

module.exports = {
  invoker,
};
