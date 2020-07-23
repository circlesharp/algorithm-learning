/**
 * START prepare
 */

// graph -> 图，将节点和所有邻居都储存起来
const graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    end: 1,
  },
  b: {
    a: 3,
    end: 5,
  },
  end: {},
}

// cost -> 开销，节点的开销指从起点出发到该节点的开销
const costs = {
  a: 6,
  b: 2,
  end: Infinity,
}

// parent -> 父节点
const parent = {
  a: 'start',
  b: 'start',
  end: null,
}

/**
 * END prepare
 */

module.exports = {
  graph,
  costs,
  parent,
}
