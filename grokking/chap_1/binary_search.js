function binarySort(orderedArr, item) {
  let low = 0
  let high = orderedArr.length - 1

  while (low <= high) {
    mid = (high + low) / 2 | 0
    guess = orderedArr[mid]
    if (guess === item) {
      return mid
    } else if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
}

module.exports = {
  binarySort,
}

/**
 * START in-file test
 */
const main = () => {
  testArr = [1, 3, 5, 7, 9]
  console.log(binarySort(testArr, 3)) // => 1
  console.log(binarySort(testArr, -1)) // => -1
}
if (require.main === module) {
  main()
}
/**
 * END in-file test
 */
