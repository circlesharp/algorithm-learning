/**
 * 得到 base-2 logarithm, in JS, Math.log's base is Math.E
 * @param {Number} logarithm 
 * @param {Boolean} ceil 是否需要向上取整
 */
function binLog(logarithm, ceil = false) {
  const exponent = Math.log(logarithm) / Math.log(2)
  if (ceil) {
    return Math.ceil(exponent)
  }
  return exponent
}

module.exports = {
  binLog,
}

/**
 * START in-file test
 */
const main = () => {
  console.log(binLog(128*2, true))
}
if (require.main === module) {
  main()
}
/**
 * END in-file test
 */
