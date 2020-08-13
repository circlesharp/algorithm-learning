const _ = require('underscore');

console.log(
  _.map({a: 1, b: 2}, _.identity)
)

// _.identity === i => i
console.log(
  _.map({a: 1, b: 2}, i => i)
)

console.log(
  _.map({a: 1, b: 2}, (v, k) => k)
)

console.log(
  _.map({a: 1, b: 2}, (v, k) => [k, v])
)

console.log(
  _.map({a: 1, b: 2}, (v, k, coll) => [k, v, coll])
)

console.log(
  _.map({a: 1, b: 2}, (v, k, coll) => [k, v, _.keys(coll)])
)

// _.keys === Object.keys
console.log(
  _.map({a: 1, b: 2}, (v, k, coll) => [k, v, Object.keys(coll)])
)
