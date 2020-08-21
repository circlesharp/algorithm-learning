/**
 * The PRED predicate is captured by the returned function.
 */
const complement = PRED =>
  (...args) => !PRED(...args);

const isEven = n => n % 2 === 0;

const isOdd = complement(isEven);

console.log(
  isOdd(2),
  isEven(2),
);

/**
 * The capture of a variable in a closure
 * grabs the reference of the captured thing
 * at the time that the closure is created.
 */

const showObject = OBJ =>
  () => OBJ;

let o = {a: 42};
const showO = showObject(o);
o.newField = 108;

console.log(
  showO() // oops! => { a: 42, newField: 108 }
);

/**
 * the typical use case minimizes the exposure of captured variables
 */

const pingpong = (function() {
  let PRIVATE = 0;
  return {
    inc(n) {
      return PRIVATE += n;
    },
    dec(n) {
      return PRIVATE -= n;
    }
  };
})();

console.log(
  pingpong.inc(10),
  pingpong.dec(7)
);

/**
 * even can adding another function is safe
 * cuz it is illegal
 */
pingpong.div = n => PRIVATE / n;
// console.log(pingpong.div(3)); // illegal
