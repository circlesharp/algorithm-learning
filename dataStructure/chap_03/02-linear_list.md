# Linear List

## 线性表的抽象数据类型描述
### 类型名称
  线性表, List
### 类型数据集
  线性表是n个元素构成的有序序列, n>=0:
  1. a(1)是表头
  2. a(n)是表尾
  3. a(i+1)为a(i)的直接后继
  4. a(i-1)为a(i)的直接前驱
  5. 直接前驱、直接后继反映了元素之间一对一的邻接逻辑关系
### 操作集
  对于一个具体的线性表 L ∈ List, 一个表示位序的整数 i, 一个元素 X ∈ ElementType:
  1. List MakeEmpty(): 初始化一个新的空线性表;
  2. ElementType FindKth(List L, int i): 根据指定的为序，返回L中相应元素a(i);
  3. Position Find(List L, ElementType X): 已知X, 返回线性表L中X相同的第一个位置，若不存在返回错误;
  4. bool Insert(List L, ElementType X, int i): 在L的指定位序i前插入一个新元素X，成功true，失败false;
  5. bool Delete(List L, int i): 从L中删除指定位序i的元素，成功true，失败false;
  6. int Length(List L): 返回线性表L的长度;

## 实现方法
1. 线性表的顺序存储实现(顺序表, 03-linear_list_1), 物理上的相邻实现逻辑上的相邻
2. 线性表的链式存储实现(链式表, 04-linear_list_2)，不需要移动数据，只需要修改链
