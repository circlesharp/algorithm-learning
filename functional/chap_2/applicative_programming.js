const _ = require('underscore');

/**
 * the basic
 * map, reduce, filter
 */

const doubleAll = arr =>
  arr.map(i => i * 2);

const average = arr => {
  const sum = arr.reduce((rst, i) => {
    return rst + i;
  }, 0);
  return sum / arr.length;
}

const onlyEven = arr =>
  arr.filter(i => i % 2 === 0);

const nums = [1, 2, 3, 4, 5];

/*
console.log(doubleAll(nums));
console.log(average(nums));
console.log(onlyEven(nums));*/
