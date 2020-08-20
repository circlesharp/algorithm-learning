/**
 * Free Variable
 * Not free as in beer,
 * and not free as in freedom,
 * but instead free as in theft.
 */

function makeAdder(CAPTURED) {
  return function(free) {
    return free + CAPTURED;
  };
}

const add10 = makeAdder(10);

const add1024 = makeAdder(1024);

console.log(
  add10(32),
  add1024(32),
);

/**
 * the value captured can be of any type,
 * including another function.
 */

const average = (arr) =>
  arr.reduce((sum, i) => sum + i, 0) / arr.length;

// a very fucking higher order function
function averageDamp(FUN) {
  return function(n) {
    return average([n, FUN(n)]);
  };
}

const averageSq = averageDamp(n => n**2);

console.log(
  averageSq(10),
);
