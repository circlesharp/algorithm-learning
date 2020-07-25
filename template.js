function fun() {

}

module.exports = {
  fun,
}

/**
 * START in-file test
 */
const { printAll } = require('')
const main = () => {
  printAll([])
}
if (require.main === module) {
  main()
}
/**
 * END in-file test
 */
