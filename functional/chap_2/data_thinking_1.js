/**
 * underscore's Object methods
 * we can view an unnamed (not built via a constructor function) JavaScript object
 * as simply an associative data store.
 */

const _ = require('underscore');

const zombie = {name: "Bub", film: "Day of the Dead"};

const library = [
  {title: "SICP", isbn: "0262010771", ed: 1},
  {title: "SICP", isbn: "0262510871", ed: 2},
  {title: "Joy of Clojure", isbn: "1935182641", ed: 1}
];

console.log(
  _.keys(zombie),
  _.values(zombie),
  _.pluck(
    [
      {title: "Chthon", author: "Anthony"},
      {title: "Grendel", author: "Gardner"},
      {title: "After Dark"}
    ],
    'author'
  ),
  _.pluck(
    [
      {title: "Chthon", author: "Anthony"},
      {title: "Grendel", author: "Gardner"},
      {title: "After Dark"}
    ].map(obj =>
      _.defaults(obj, { author: 'Unknown' })
    ),
    'author'
  ),
  _.object(_.map(_.pairs(zombie), pair =>
    [pair[0].toUpperCase(), pair[1]]
  )),
  _.invert(zombie),
  _.findWhere(library, {title: 'SICP', ed: 2}), // sql
  _.where(library, {title: 'SICP'}),
)
