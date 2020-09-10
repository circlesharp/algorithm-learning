const _ = require('underscore');
const { cat } = require('../chap_2/applicative_programming_example_4');

/**
 * 
 * @param {string} from node
 * @param {array} path 
 */
const getNodeTo = (path, node) => {
  const from = path[0];
  const to = path[1];
  return _.isEqual(node, from) ? to : undefined;
};

/**
 *
 * Stop When: _.isEmpty
 * Take One Step：cat
 * Smaller Problem: _.rest
 * 
 * @param {*} graph 
 * @param {*} node 
 */
const next = (graph, node) => {
  if (_.isEmpty(graph)) return [];
  let to = getNodeTo(_.first(graph), node);
  to = to ? [ to ] : [];
  return cat(to, next(_.rest(graph), node));
};

module.exports = {
  next,
};
