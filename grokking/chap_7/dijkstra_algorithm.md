# Dijkstra's Algorithm

## 概念
1. 狄克斯特拉算法
2. 找出最快（非最短）路径
3. 给每段分配权重，找出总权重最小的路径

## 步骤
1. 找出最便宜的节点
2. 对于该节点的邻居，更新开销
3. 重复，知道对图中每个节点都这样做
4. 计算最终路径

## 术语
- 权重, weight
- 加权图 / 非加权图, weighted graph / unweighted graph
- Dijkstra's Algorithm 只适用于 有向无环图

## 代码实现
### 首先需要3个散列表

#### 1 graph
|Node|Neighbor|Cost|
|----|--------|--------|
|START|A|6|
|START|B|2|
|A|END|1|
|B|A|3|
|B|END|5|
|END|-|-|

#### 2 costs
|Neighbor|Cost|
|--------|----|
|A|6|
|B|2|
|END|&infin;|

#### 3 parents
|Node|Parent|
|----|------|
|A|START|
|B|START|
|END|-|
