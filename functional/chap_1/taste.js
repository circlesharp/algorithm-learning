const _ = require('underscore');

const existy = x =>
  x != null;

const truthy = x =>
  x !== false && existy(x);

/*
console.log(existy(null));
console.log(existy(undefined));
console.log(existy({}.nothing));
console.log(existy((function(){}())));
console.log(existy(0));
console.log(existy(false));

console.log(truthy(false));
console.log(truthy(undefined));
console.log(truthy(0));
console.log(truthy(''));*/

const doWhen = (cond, action) => {
  if (truthy(cond)) return action();
  return undefined;
}

const executeIfHasField = (target, name) =>
  doWhen(existy(target[name]), () =>{
    let result = _.result(target, name);
    console.log(`The result is ${result}.`);
    return result;
  });

executeIfHasField([1, 2, 3], 'reverse');
executeIfHasField([1, 2, 3], 'nothing');
executeIfHasField([3, 2, 1], 'sort');
executeIfHasField({foo: 42}, 'foo');

