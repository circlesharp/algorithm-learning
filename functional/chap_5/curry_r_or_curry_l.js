/*
  Right-to-left currying allows you to fix the optional arguments to certain values.

  Partial application handles working from left.
  
  Between partial application and currying, I have both directions covered,
  allowing the full range of parameter specialization. */

const leftCurryDiv = n =>
  d => n / d;

const rightCurryDiv = d =>
  n => n / d;

const divide10By = leftCurryDiv(10);
const divideBy10 = rightCurryDiv(10);

console.log(
  divide10By(2),
  divideBy10(2),
);

