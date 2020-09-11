const _ = require('underscore');

const { next } = require('./recursive_02');
const { cat, construct } = require('../chap_2/applicative_programming_example_4');

const existy = n => n != null;
const truthy = n => n !== false && existy(n);
const doWhen = (cond, action) => {
  if (truthy(cond)) return action();
  return undefined;
};
const invoker = (name, method) =>
  (target, ...args) => {
    const targetMethod = existy(target) && target[name];
    return doWhen(
      existy(targetMethod) && method === targetMethod,
      () => targetMethod.apply(target, args),
    );
  };
const rev = invoker('reverse', Array.prototype.reverse);

const depthSearch = (graph, nodes, seen) => {
  if (_.isEmpty(nodes)) return rev(seen);
  const node = _.first(nodes);
  const more = _.rest(nodes);
  if (_.contains(seen, node)) return depthSearch(graph, more, seen);
  return depthSearch(
    graph,
    cat(next(graph, node), more),
    construct(node, seen),
  );
};

module.exports = {
  depthSearch,
};
