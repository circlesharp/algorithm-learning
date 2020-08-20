/**
 * function-local variables live only for the lifetime of a function's body;
 * But when a closure captures a variable, it's able to live for an indeterminate extent.
 */

function whatWasTheLocal() {
  const CAPTURED = 'Oh Hai';
  return function() {
    return `The local was: ${CAPTURED}`;
  }
}

const reportLocal = whatWasTheLocal();

console.log(
  reportLocal(),
);

/**
 * Local variables are not the only things that can be captured.
 * Function arguments can be captured as well.
 */

function createScaleFunction(FACTOR) {
  return function(v) {
    return v.map(n => n * FACTOR);
  }
}

const scale10 = createScaleFunction(10);

console.log(
  scale10([1, 2, 3]),
);

/**
 * simulate closure
 */

function createWeirdScaleFunction(FACTOR) {
    return function(v) {
    this.FACTOR = FACTOR; // this 原本是 {}， 现在成了 { FACTOR: 10 }
    const captures = this;
    return v.map(
      function(n) {
        return n * this.FACTOR;
      }.bind(captures) // captures 就是 { FACTOR: 10 }，因为绑定了，所以可以 variable retention
    );
  }
}

const anotherScale10 = createWeirdScaleFunction(10);

console.log(
  anotherScale10.call({}, [5, 6, 7]),
);
