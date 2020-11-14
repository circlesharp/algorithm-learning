# Linked List

## 链表的特点
1. 克服数组需要预先知道数据大小的缺点，实现灵活的内存动态管理；
2. 失去数组方便随机存取的优点；
3. 空间开销比较大（增加了指针域）。

## 链表的细节
### 使用结构的嵌套来定义单向链表结点的数据类型
  ```
  typedef struct Node *PtrToNode;
  struct Node
  {
    ElementType Data;
    PtrToNode Next;
  };
  ```
  Node 中的 Next 分量又是给结构类型的指针，称之为结构的递归定义。
### “给定一个单链表”
  就是给定一个指向该链表头结点的指针。
  `typedef PtrToNode List;`
### 申请大小为 struct Node 结构的动态内存空间
  `PtrToNode p = (PtrToNode)malloc(sizeof(struct Node));`

## 单向链表常见操作
### 1 插入结点t
  1. 插在 p 之后：
    ```
    t -> Next = p -> Next;
    p -> Next = t;
    ```
  2. 插在链表头
    ```
    t -> Next = head;
    head = t;
    ```
### 删除结点t
  t的前一个结点为p
  1. t不是第一个结点
    ```
    t = p -> Next;
    p -> Next = t -> Next;
    free(t);
    ```
  2. t是第一个结点
    ```
    t = head;
    head = head -> Next;
    free(t);
    ```
### 遍历
  ```
  p = head;
  while(p != NULL)
  {
    /* do something about p */
    p = p -> Next;
  }
  ```
### 链表的建立
  1. 建立链表的过程实际上就是不断在链表中插入结点的过程
    1. 在链表的头上不断插入新结点；
    2. 在尾部不断插入新结点（需要一个临时的结点指针一直指向当前链表的最后一个结点）；
  2. 带头结点的单向链表
    1. 可以不需要特别区分是否是第一个结点还是其他结点
    2. 在头上加上一个“空结点”，Data空置，Next指向链表的第一个真正结点
