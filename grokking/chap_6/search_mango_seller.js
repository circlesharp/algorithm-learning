// 图
const graph = {}
graph['you'] = ['alice', 'bob']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = ['john']
graph['peggy'] = ['amy', 'claire']
graph['thom'] = ['tommy']
graph['jonny'] = ['ak47']
graph['amy'] = ['alice', 'bob', 'tommy', 'thom', 'jonny']
graph['tommy'] = ['alice', 'bob', 'tommy', 'thom', 'jonny']
graph['ak47'] = ['alice', 'bob', 'tommy', 'thom', 'jonny']
graph['john'] = ['alice', 'bob', 'tommy', 'thom', 'jonny']


/**
 * 检测是否为芒果销售商
 * 这个函数检查人的姓名是否以m结尾：如果是，他就是芒果销售商
 * @param {*} man 
 * arr, str 都有 slice ，如果入参为 -1， 则返回最后一个，不改变原数据
 */
function isMangoSeller(man) {
  return man.slice(-1) === 'm'
}

/**
 * 这里只解决了 BSF 能解决的第一个问题：是否有从 A 到 B 的路径
 * 第二个问题是：从 A 到 B 哪条路径最短
 * @param {String} man 
 */
function search(man) {
  let queue = []
  const searched = []
  queue = queue.concat(graph[man])
  while (queue.length > 0) {
    console.log(queue)
    let person = queue.shift()
    if (!searched.includes(person)) {
      if (isMangoSeller(person)) {
        return person
      } else {
        queue = queue.concat(graph[person])
        searched.push(person)
      }
    }
  }
  return false
}

console.log(search('you'))

// ps. 从拓扑排序引出树
