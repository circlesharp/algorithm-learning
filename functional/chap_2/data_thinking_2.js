/**
 * Table-Like Data
 * each row is equivalent to a js object
 * and each cell is a key/value pair in each object
 */

const _ = require('underscore');
const { construct } = require('./applicative_programming_example_4.js');

const pretty = x => {
  console.log(
    JSON.stringify(x, null, 2)
  )
};

const library = [
  {title: "SICP", isbn: "0262010771", ed: 1},
  {title: "SICP", isbn: "0262510871", ed: 2},
  {title: "Joy of Clojure", isbn: "1935182641", ed: 1}
];


// SELECT title FROM library
pretty(_.pluck(library, 'title'));

/**
 * SQL's SELECT statement, while preserving the table abstraction
 * _.pick Return a copy of the object only containing the whitelisted properties.
 */
const project = (table, keys) =>
  _.map(table, obj =>
    _.pick(obj, keys)
    // _.pick(obj, ...keys)
    // _.pick.apply(null, construct(obj, keys))
  );

pretty(
  project(library, ['title', 'isbn'])
);

pretty(
  // _.pluck(project(library, 'isbn'), 'isbn'),
  project(library, 'isbn').map(i => i.isbn)
);

/**
 * _.omit Return a copy of the object without the blacklisted properties.
 * EXAMPLE: rename({a: 1, b: 2}, {'a': 'AAA'})
 */
const rename = (obj, newNames) =>
  _.reduce( // 得用 _.reduce, 因为 newNames 是对象
    newNames,
    (o, nu, old) => {
      if (_.has(obj, old)) o[nu] = obj[old];
      return o;
    },
    _.omit(obj, _.keys(newNames)) // 太秀了，排除了黑名单的副本
  );


/**
 * AS to alias column names
 * SELECT ed AS edition FROM library
 */
const as = (table, newNames) =>
  _.map(table, obj =>
    rename(obj, newNames)
  );

pretty(as(library, {ed: 'edition'}));

pretty(
  project(
    as(library, {ed: 'edition'}),
    ['edition']
  )
);
