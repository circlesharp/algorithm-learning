/**
 * What happens if you create a function
 * with a variable named the same as a variable
 * in a higher scope?
 * 
 * => Shadowing 遮蔽
 */

const shadowed = 0;

function argShadow(shadowed) {
  return `Value is ${shadowed}.`;
}

function varShadow(shadowed) {
  var shadowed = 432000;
  return `Value is ${shadowed}.`;
}

console.log(
  argShadow(108),
  argShadow(),
  varShadow(888),
)
