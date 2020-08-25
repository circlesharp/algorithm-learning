/**
 * generate unique strings
 */
const uniqueString = len =>
  Math.random().toString(36).substr(2, len);

/**
 * generate unique strings with a certain prefix
 */
const uniqueStringWithPrefix = prefix =>
  `${prefix}${new Date().getTime()}`;

console.log(
  uniqueString(10),
  uniqueStringWithPrefix('circl'),
)

/**
 * with free variable to aggregate
 * but, do not do this, unless it is necessary.
 * 
 * When a function is reliant on only its arguments for the value that it will return,
 * it is known to exhibit something called referential transparency.
 * 
 * The author thought I will be surprised
 * how seldom mutating a little bit of state
 * is required in functional programming.
 */

const makeUniqueStringFunction = start => {
  let COUNTER = start;
  return prefix =>
    `${prefix}${COUNTER++}`;
};

const uniqueStringAggregate = makeUniqueStringFunction(0);

console.log(
  uniqueStringAggregate('circl'),
  uniqueStringAggregate('tom'),
  uniqueStringAggregate('amy'),
)

/**
 * object properties is ok.
 * but there are times when hiding a critical implementation
 * detail from access is important.
 */

const objGenerator = {
  count: 0,
  uniqueString(prefix) {
    return `${prefix}${this.count++}`;
  },
}

console.log(
  objGenerator.uniqueString('circl'),
  objGenerator.uniqueString('tom'),
  objGenerator.uniqueString('amy'),
)

/**
 * hide the counter in generator
 * using the JavaScript secret sauce
 */

const omgGenerator = (function(init) {
  let COUNTER = init;
  return {
    uniqueString(prefix) {
      return `${prefix}${COUNTER++}`;
    },
  };
})(0);

console.log(
  omgGenerator.uniqueString('circl'),
  omgGenerator.uniqueString('tom'),
  omgGenerator.uniqueString('amy'),
);
