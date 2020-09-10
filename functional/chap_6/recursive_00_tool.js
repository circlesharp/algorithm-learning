const isEmpty = arr =>
  arr.length === 0;

const first = arr =>
  Array.from(arr)[0];

const rest = arr =>
  Array.from(arr).slice(1);

module.exports = {
  isEmpty,
  first,
  rest,
};
