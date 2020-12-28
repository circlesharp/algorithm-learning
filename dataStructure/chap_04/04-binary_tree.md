# binary tree

## 定义
1. 一个二叉树是一个又穷的结点集合，这个集合可以为空，若不为空，则它是由根节点和称为其左子树和右子树的两个不相交的二叉树组成。
2. 与树的一般定义不同，除了每个结点至多有两颗子树外，子结点是有左右顺序之分的。

## 分类
1. 斜二叉树（Skewed Binary Tree, 退化二叉树），深度为 n，退化为线性表
2. 满二叉树（Perfect Binary Tree, 完美二叉树），每个分支结点都存在左子树和右子树，且所有叶结点都在同一层
3. 完全二叉树（Complete Binary Tree），与满二叉树的位置相同，是最理想的树结构，深度 O(log(n))

## 性质
1. 二叉树的深度小于等于节点数，平均深度 O(n ^ (1/2))
2. 一个二叉树第 i 层的最大结点数为 2 ^ (i-1), k >= 1
3. 深度为 k 的二叉树有最大结点总数 2 ^ k - 1, i >= 1
4. 对非空的二叉树，n(0) 表示叶结点的个数，n(2) 表示度为2的非叶结点的个数，满足 n(0) = n(2) + 1
  ( n = n(0) + n(1) + n(2); n = 1 + n(1) + n(2) * 2; )
5. 具有 n 个结点的完全二叉树的深度 k 为 floor(log(n)) + 1