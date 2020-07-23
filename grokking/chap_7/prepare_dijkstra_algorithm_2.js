/**
 * START prepare
 */

// graph -> 图，将节点和所有邻居都储存起来
const graph = {
  start: {
    c: 5,
    h: 0,
  },
  c: {
    g: 15,
    d: 20,
  },
  h: {
    g: 30,
    d: 35,
  },
  g: {
    p: 20,
  },
  d: {
    p: 10,
  }
}

// cost -> 开销，节点的开销指从起点出发到该节点的开销
const costs = {
  c: 5,
  h: 0,
  g: Infinity,
  d: Infinity,
  p: Infinity,
}

// parent -> 父节点
const parent = {
  c: 'start',
  h: 'start',
  g: null,
  d: null,
  p: null,
}

/**
 * END prepare
 */

module.exports = {
  graph,
  costs,
  parent,
}
