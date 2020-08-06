const _ = require('underscore');

function parseAge(age) {
  if (!_.isString(age)) throw new Error('Expecting a string');
  let a;
  console.log('Attempting to parse an age');

  a = parseInt(age, 10);
  if (_.isNaN(a)) {
    console.log(['Could not parse age:', age].join(' '));
  }

  return a;
}

parseAge('42');
// parseAge(42);
parseAge('circl');
