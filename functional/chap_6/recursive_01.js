const _ = require('underscore');

/* certain values are built from subproblem of a larger problem. */
const myLength = arr => {
  if (_.isEmpty(arr)) return 0;
  else return 1 + myLength(_.rest(arr));
};

module.exports = {
  myLength,
};
