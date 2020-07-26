const { printAll } = require('../../common/utils')
const { getIntersectionSet, getDifferenceSet } = require('../../common/set')

const statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])
const coveredStates = new Set()
let unCoveredStates = getDifferenceSet(statesNeeded, coveredStates)

const stations = {
  kone: new Set(["id", "nv", "ut"]),
  ktwo: new Set(["wa", "id", "mt"]),
  kthree: new Set(["or", "nv", "ca"]),
  kfour: new Set(["nv", "ut"]),
  kfive: new Set(["ca", "az"]),
}
const finalStations = new Set()
const unCheckedStations = Object.keys(stations) // 还没选中的电台

/**
 * 1. 贪心：每次都找能够匹配到最多的还没有覆盖的地方
 */
function chooseBroadcast() {
  let almostBestStation // 局部最优解
  while (unCoveredStates.size > 0) {
    // 1 找到局部最优解
    almostBestStation = findAlmostBestStation()

    // 2 处理电台
    finalStations.add(almostBestStation)
    unCheckedStations.splice(unCheckedStations.indexOf(almostBestStation), 1)

    // 3 处理州
    unCoveredStates = getDifferenceSet(unCoveredStates, stations[almostBestStation])

    console.log(almostBestStation, stations[almostBestStation], unCoveredStates)
  }
  return finalStations
}

/**
 * 找到交集的 size 最大的（局部最优解）
 * 要忍住诱惑，这里只处理 station，不要想着顺带处理 states
 */
function findAlmostBestStation() {
  let bestStation = unCheckedStations[0]
  let bestCovered = getIntersectionSet(stations[bestStation], unCoveredStates)
  unCheckedStations.forEach(station => {
    const covered = getIntersectionSet(stations[station], unCoveredStates)
    if (covered.size > bestCovered.size) {
      bestStation = station
    }
  })
  return bestStation
}

printAll([
  chooseBroadcast()
])
