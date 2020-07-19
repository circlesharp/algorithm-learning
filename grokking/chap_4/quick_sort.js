function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  } else {
    const left = arr.slice(1).filter(i => i < arr[0])
    const right = arr.slice(1).filter(i => i >= arr[0])
    return quickSort(left).concat([arr[0]]).concat(quickSort(right))
  }
}

module.exports = {
  quickSort,
}

/**
 * START in-file test
 */
const main = () => {
  console.log(quickSort([1, 3, 2]))
}
if (require.main === module) {
  main()
}
/**
 * END in-file test
 */
