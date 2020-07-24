/**
 * START prepare
 */

// graph -> 图，将节点和所有邻居都储存起来
const graph = {
  start: {
    b: 5,
    c: 2,
  },
  b: {
    d: 4,
    e: 2,
  },
  c: {
    b: 8,
    e: 7,
  },
  d: {
    f: 3,
    e: 6,
  },
  e: {
    f: 1,
  },
  f: {},
}

// cost -> 开销，节点的开销指从起点出发到该节点的开销
const costs = {
  b: 5,
  c: 2,
  d: Infinity,
  e: Infinity,
  f: Infinity,
}

// parent -> 父节点
const parent = {
  b: 'start',
  c: 'start',
  d: null,
  e: null,
  f: null,
}

/**
 * END prepare
 */

module.exports = {
  graph,
  costs,
  parent,
}
