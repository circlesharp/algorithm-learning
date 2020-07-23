const {
  graph,
  costs,
  parent,
} = require('./prepare_dijkstra_algorithm_2')

/**
 * 只要还有要处理的节点
 * 1. 获取离起点最近的节点
 * 2. 更新其邻居的开销
 * 3. 如果有邻居的开销被更新，同时更新其父节点
 * 4. 将该节点标记为处理过
 */

const unProcessed = Object.keys(costs)
const processed = []

function dijkstraAlgorithm() {
  let cheapest = findCheapest()
  while (unProcessed.length > 0) {
    updateNeighbor(cheapest)
    processed.push(cheapest.node)
    cheapest = findCheapest()
  }
  return {
    cheapest,
    parent,
  }
}

function findCheapest() {
  let cheapestNode = unProcessed[0]
  let cheapestCost = costs[cheapestNode]
  unProcessed.forEach(node => {
    if (costs[node] < cheapestCost) {
      cheapestNode = node
      cheapestCost = costs[node]
    }
  })
  return {
    node: unProcessed.splice(unProcessed.indexOf(cheapestNode), 1)[0],
    cost: cheapestCost,
  }
}

function updateNeighbor(cheapest) {
  let { node, cost } = cheapest
  unProcessed.forEach(neighbor => {
    if (graph[node][neighbor] && graph[node][neighbor] + cost < costs[neighbor]) {
      costs[neighbor] = graph[node][neighbor] + cost
      parent[neighbor] = node
    }
  })
}

function stringifyResult(result) {
  const { cheapest } = result
  return `最近的距离是： ${cheapest.cost}, 路径是： ${getPath(cheapest.node, cheapest.node)}`
}

function getPath(node, msg) {
  if (!parent[node]) {
    return msg
  }
  msg = parent[node] + ' => ' + msg
  return getPath(parent[node], msg)
}

console.log(stringifyResult(dijkstraAlgorithm()))
