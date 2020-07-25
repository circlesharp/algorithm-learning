/**
 * 并集
 * @param {Set} a 
 * @param {Set} b 
 */
function getUnionSet(a, b) {
  return new Set([...a, ...b])
}

/**
 * 交集
 * @param {Set} a 
 * @param {Set} b 
 */
function getIntersectionSet(a, b) {
  return new Set([...a].filter(item => b.has(item)))
}

/**
 * 差集
 * @param {Set} a 
 * @param {Set} b 
 */
function getDifferenceSet(a, b) {
  return new Set([...a].filter(item => !b.has(item)))
}

module.exports = {
  getUnionSet,
  getIntersectionSet,
  getDifferenceSet,
}

/**
 * START in-file test
 */
const { printAll } = require('./utils')
const main = () => {
  const fruits = new Set(["avocado", "tomato", "banana"])
  const vegetables = new Set(["beets", "carrots", "tomato"])
  printAll([
    fruits,
    vegetables,
    getUnionSet(fruits, vegetables),
    getIntersectionSet(fruits, vegetables),
    getDifferenceSet(fruits, vegetables),
    getDifferenceSet(vegetables, fruits),
  ])
}
if (require.main === module) {
  main()
}
/**
 * END in-file test
 */
