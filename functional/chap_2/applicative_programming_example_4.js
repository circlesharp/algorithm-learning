const _ = require('underscore');

const existy = x => x != null;

/**
 * cat
 * _.first === _.head
 * _.rest
 * Array#concat 可以连接 多个数组
 */

/**
 * [], [], [] => []
 */
function cat(/* [], [], [] */) {
  const head = _.first(arguments);
  if (existy(head)) {
    // return head.concat.apply(head, _.rest(arguments));
    return head.concat(..._.rest(arguments));
  }
}

/**
 * item, [] => []
 */
// function construct(head, tail) {
//   return cat([head], _.toArray(tail));
// }

const construct = (head, arr) =>
  [head].concat(arr);

/**
 * fun, [a, b, c ...] => [...([a, b, c ...].map) ]
 */
function mapCat(fun, coll) {
  return cat.apply(null, coll.map(fun));
}
// const mapCat = (fun, coll) => [].concat(...coll.map(fun));

/**
 * a fucking chain of functions called one after the other,
 * each gradually transforming the result from the last to reach a fucking final solution.
 */

// example: butLast([11, 22, 33, 44]) => [11, 22, 33]
function butLast(coll) {
  return _.toArray(coll).slice(0, -1);
}

const interPose = (inter, coll) =>
  butLast(mapCat(e => construct(e, [inter]), coll));


// console.log(
//   cat([1,2,3], [4,5], [6,7,8]),
//   construct(42, [1, 2, 3]),
//   mapCat(e => construct(e, [',']), [1, 2, 3]),
//   butLast([11, 22, 33, 44]),
//   interPose(',', [1, 2, 3])
// )

module.exports = {
  construct,
  cat,
};
