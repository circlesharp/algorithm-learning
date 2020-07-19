const { swap } = require('../../common/utils')

function quickSort(originArr) {
  let arr = Array.from(originArr)
  // arr.length <= 2 不需要做什么
  if (arr.length == 2) {
    if(arr[0] > arr[1]) {
      swap(arr, 0, 1)
    }
  } else if (arr.length > 2) {
    let pivot = arr[0]
    let lefts = []
    let rights = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > pivot) {
        rights.push(arr[i])
      } else {
        lefts.push(arr[i])
      }
    }
    lefts = quickSort(lefts)
    rights = quickSort(rights)
    lefts.push(pivot)
    arr = lefts.concat(rights)
  }
  return arr
}

module.exports = {
  quickSort,
}

/**
 * START in-file test
 */
const main = () => {

}
if (require.main === module) {
  main()
}
/**
 * END in-file test
 */

