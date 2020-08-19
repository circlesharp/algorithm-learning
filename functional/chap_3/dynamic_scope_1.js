const _ = require('underscore');

const globals = {};

function makeBindFun(resolver) {
  return function(k, v) {
    const stack = globals[k] || [];
    globals[k] = resolver(stack, v);
    return globals;
  };
}

const stackBinder = makeBindFun((stack, v) => {
  stack.push(v);
  return stack;
});

const stackUnbinder = makeBindFun((stack) => {
  stack.pop();
  return stack;
});

const dynamicLookup = k => {
  const slot = globals[k] || [];
  return _.last(slot); // Get the last element of an array.
};

stackBinder('a', 1);
stackBinder('b', 100);
stackBinder('a', '*');
stackUnbinder('a');

const f = () => dynamicLookup('a');
const g = () => {
  stackBinder('a', 'g');
  return f();
};

console.log(
  globals,
  dynamicLookup('a'),
  f(),
  g(),
);
