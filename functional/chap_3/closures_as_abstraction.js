/**
 * closures often allow you to create functions
 * based solely on some 'configuration'
 * captured at creation time.
 */

// plucker => 采集器、拔毛机……
const plucker = FIELD =>
  obj => obj && obj[FIELD];

const best = {title: "Infinite Jest", author: "DFW"};
const getTitle = plucker('title');

const books = [{title: "Chthon"}, {stars: 5}, {title: "Botchan"}];
const third = plucker(2);

console.log(
  getTitle(best),
  third(books),
);

/**
 * comes handy in conjunction with filter
 * (applicative programming)
 */

console.log(
  books.filter(getTitle), // 有 title 属性的才被过滤出来
);
