const _ = require('underscore');

function strangeIdentity(n) {
  for (var i = 0; i < n; i++); // var => hoisting
  return i;
}

console.log(
  strangeIdentity(138)
);

/**
 * simulating the function scope by using this
 */

function strangeIdentity2(n) {
  for (this.i = 0; this.i < n; this.i++);
  return this.i; 
} 

console.log(
  strangeIdentity2(108),
  i,
  strangeIdentity2.call({}, 10000),
  i,
);

/**
 * the final simulation
 */

function f() {
  this.a = 200;
  return this.a + this.b;
}

const globals = {b: 2};

console.log(
  f.call(_.clone(globals)),
  globals
);
