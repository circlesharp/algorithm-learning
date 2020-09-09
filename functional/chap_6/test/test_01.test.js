const {
  myLength
} = require('../recursive_01');

test('recursion: get array\'s name', () => {
  expect(myLength([1,2,3,4,5])).toBe(5);
});
