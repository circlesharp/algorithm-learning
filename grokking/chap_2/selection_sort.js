const { findSmallest } = require('../../common/utils')

function selectionSort(arr) {
  const orderedArr = []
  const cloneArr = Array.from(arr)
  // todo
  while (cloneArr.length > 0) {
    const { smallestIndex } = findSmallest(cloneArr)
    orderedArr.push(cloneArr.splice(smallestIndex, 1)[0])
  }
  return orderedArr
}

module.exports = {
  selectionSort,
}

/**
 * START in-file test
 */
const main = () => {
  console.log(selectionSort([100, 2, 1, 2, 4, 2, 7, 1]))
}
if (require.main === module) {
  main()
}
/**
 * END in-file test
 */
