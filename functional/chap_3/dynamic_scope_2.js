const _ = require('underscore');

function globalThis() { return this; }

/*
console.log(
  globalThis(),
  globalThis.call('barnabas'),
  globalThis.apply('orsulak', [])
)*/

/**
 * _.bind => Create a function bound to a given object
 */
const nopeThis = _.bind(globalThis, 'nope');

console.log(
  nopeThis.call('wat')
)

const target = {
  name: 'the right value',
  aux() { return this.name; },
  act() { return this.aux(); },
};

// wat Don't Has the aux methods
// console.log(target.act.call('wat'));

/**
 * _.bindAll => Bind a number of an object’s methods to that object.
 */
_.bindAll(target, 'aux', 'act');

console.log(target.act.call('wat'));
