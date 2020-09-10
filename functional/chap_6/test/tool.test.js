const _ = require('underscore');
const {
  isEmpty,
  first,
  rest,
} = require('../recursive_00_tool');

const arr1 = [];
const arr2 = [1, 2, 3, 4, 5];

test('isEmpty', () => {
  expect(isEmpty(arr1)).toEqual(_.isEmpty(arr1));
  expect(isEmpty(arr2)).toEqual(_.isEmpty(arr2));
});

test('first', () => {
  /* if take a empty array, get undefined */
  expect(first(arr1)).toEqual(_.first(arr1));
  expect(first(arr2)).toEqual(_.first(arr2));
});

test('rest', () => {
  /* if take a empty array, get empty arr */
  expect(rest(arr1)).toEqual(_.rest(arr1));
  expect(rest(arr2)).toEqual(_.rest(arr2));
});
