const _ = require('underscore');

function parseAge(age) {
  if (!_.isString(age)) fail('Expecting a string');

  let a;
  note('Attempting to parse an age');
  a = parseInt(age, 10);

  if (_.isNaN(a)) {
    warn(`Could not parse age: ${age}`);
    a = 0
  }

  return a;
}

function fail(thing) {
  throw new Error(thing);
}

function warn(thing) {
  console.log(`WARNING: ${thing}`);
}

function note(thing) {
  console.log(`NOTE: ${thing}`);
}

parseAge('42');
// parseAge(42);
parseAge('circl');