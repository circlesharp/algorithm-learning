const _ = require('underscore');

/**
 * sortBy, groupBy, countBy
 */

const people = [{ name: "Rick", age: 31 }, { name: "Amy", age: 11 }, { name: "Jack", age: 24 }];

console.log(
  _.sortBy(people, 'age'),
  _.sortBy(people, p => p.age)
)

console.log(
  _.groupBy(people, p => p.age > 20),
  _.groupBy(people, p => p.age > 20 ? 'old' : 'young'),
  _.groupBy(people, p => {
    if (p.age >= 10 && p.age < 20) return '10s';
    if (p.age >= 20 && p.age < 30) return '20s';
    if (p.age >= 30 && p.age < 40) return '30s';
  })
)

console.log(
  _.countBy(people, p =>
    p.age > 20 ? 'old' : 'young'
  )
)
