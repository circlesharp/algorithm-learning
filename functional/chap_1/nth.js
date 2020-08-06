const _ = require('underscore');
const  {
  fail, warn, note
} = require('./betterParseAge');


function naiveNth(a, index) {
  return a[index];
}

// 是否允许索引访问
function isIndexed(data) {
  return _.isArray(data) || _.isString(data);
}

// nth 返回一个存储在允许索引访问的数据类型中的有效元素
function nth(a, index) {
 if (!_.isNumber(index)) fail('Expected a number as the index');
 if (!isIndexed(a)) fail('Not supported on non-indexed type');
 if ((index < 0 || (index > a.length - 1))) fail('Index value is out of bounds');
 return a[index];
}

note(nth(['a', 'b', 'c'], 2));
note(nth('jkl', 2));
// note(nth({}, 2));
// note(nth('jkl', 200));
// note(nth('jkl', 'aaa'));

function second(a) {
  return nth(a, 1);
}

note(second([1, 2, 4]));
// note(second([1]));
note(second('abab'));
