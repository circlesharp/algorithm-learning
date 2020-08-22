/**
 * Tightening the finder up a bit
 * 1. the best-value function returns true
 *    if the first argument is 'better' the the second
 * 2. the best-value function knows how to 'unwrap' its arguments
 */

/**
 * _.max
 * Math.max.apply(null, [1, 2, 3, 4, 5]) or Math.max(...[1, 2, 3, 4, 5])
 */
const best = (fun, coll) =>
  coll.reduce((x, y) => fun(x, y) ? x : y);

console.log(
  best(
    (x, y) => x > y,
    [1, 2, 3, 4, 5],
  ),
);
