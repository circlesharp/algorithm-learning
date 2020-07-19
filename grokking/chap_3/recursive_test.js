/**
 * base case & recursive case
 * @param {Number} i 
 */
function recurseCountDown(i) {
  console.log(i)
  if (i <= 0) { // base case
    return
  } else { // recursive case
    recurseCountDown(i - 1)
  }
}
/**
 * base case & recursive case
 * END
 */

/**
 * call stack 调用栈
 * @param {Number} x 
 */
function factorial(x) {
  if (x <= 1) {
    return 1
  }
  return x * factorial(x - 1)
}
console.log(factorial(5))
