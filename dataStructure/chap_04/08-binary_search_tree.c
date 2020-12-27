/* 二叉树 链式存储 */

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include "../resource/LinkQueue.h"

/* 兼容队列
typedef int ElementType;
typedef struct _BinTree {
  ElementType data;
  struct _BinTree* left;
  struct _BinTree* right;
} BinTree; */

bool IsEmpty(BinTree* binTree);
BinTree* CreateBinTree();
void InorderTraversal(BinTree* binTree); /* 中序遍历 LVR */
BinTree* Find(BinTree* bst, ElementType x); /* 搜索元素，返回结点地址 */
BinTree* FindMin(BinTree* bst); /* 找最小元素 */
BinTree* FindMax(BinTree* bst); /* 找最大元素 */
BinTree* Insert(BinTree* bst, ElementType x); /* 二叉搜索树的插入 */
BinTree* Delete(BinTree* bst, ElementType x); /* 二叉搜索树的删除 */

int main()
{
  ElementType treeData[] = {18, 10, 20, 7, 15, 0, 22, 0, 9};
  BinTree* binSearchTree = CreateBinTree(treeData, sizeof(treeData) / sizeof(treeData[0]));

  {
    /* test Find */
    BinTree* find9 = Find(binSearchTree, 9);
    BinTree* find20 = Find(binSearchTree, 20);
    BinTree* find22 = Find(binSearchTree, 22);
    printf("find 9 \'s data is: %d, pointer is: %p\n", find9->data);
    printf("find 20 \'s data is: %d, pointer is: %p\n", find20->data, find20);
    printf("find 22 \'s data is: %d, pointer is: %p\n", find22->data, find22);
  }

  {
    /* test Min Max */
    BinTree* minTree = FindMin(binSearchTree);
    BinTree* maxTree = FindMax(binSearchTree);
    printf("the min is: %d\n", minTree->data);
    printf("the max is: %d\n", maxTree->data);
  }

  {
    /* test Insert */
    Insert(binSearchTree, 13);
    Insert(binSearchTree, 12);
    Insert(binSearchTree, 11);
    InorderTraversal(binSearchTree);
  }

}

bool IsEmpty(BinTree* binTree)
{
  return binTree == NULL;
}

/* 层序生成二叉树 */
BinTree* CreateBinTree(ElementType* treeData, int dataLength)
{
  /* 若第一位是 NoInfo，空树 */
  if (treeData[0] == NoInfo)
    return NULL;

  /* 初始化 */
  Queue* nodeQueue = CreateQueue(100);
  BinTree* tempTree = (BinTree*)malloc(sizeof(BinTree));

  /* 处理根 */
  BinTree* bTree = (BinTree*)malloc(sizeof(BinTree));
  bTree->data = treeData[0];
  bool isLeftChild = true;
  AddQ(nodeQueue, bTree);

  /* 可以尝试 i += 2 的循环，但是不安全，所以还是区分左右好一点 */
  for (int i = 1; i < dataLength; i++) {
    /* 处理队列 */
    if (isLeftChild)
      tempTree = DeleteQ(nodeQueue);

    /* 处理该结点 */
    ElementType value = treeData[i];
    BinTree* tempNode = (BinTree*)malloc(sizeof(BinTree));
    tempNode->left = NULL;
    tempNode->right = NULL;
    if (value == NoInfo) tempNode = NULL;
    else {
      tempNode->data = value;
      AddQ(nodeQueue, tempNode);
    }

    /* 处理树 */
    if (isLeftChild)
      tempTree->left = tempNode;
    else
      tempTree->right = tempNode;

    isLeftChild = !isLeftChild;
  }

  printf("the loop is over\n");
  return bTree;
}

/* 中序遍历 LVR */
void InorderTraversal(BinTree* binTree)
{
  if (binTree == NULL) return;
  InorderTraversal(binTree->left);
  printf("%-6d", binTree->data);
  InorderTraversal(binTree->right);
}

/* 搜索元素，返回结点地址 */
BinTree* Find(BinTree* bst, ElementType x)
{
  printf("the node is: %p, %d\n", bst, bst->data);
  if (!bst) return NULL;
  else if (x > bst->data) return Find(bst->right, x);
  else if (x < bst->data) return Find(bst->left, x);
  else return bst;
}

/* 找最小元素 */
BinTree* FindMin(BinTree* bst)
{
  if (!bst) return NULL;

  if (bst->left) return FindMin(bst->left);
  else return bst;
}

/* 找最大元素 */
BinTree* FindMax(BinTree* bst)
{
  if (!bst) return NULL;

  if (bst->right) return FindMax(bst->right);
  else return bst;
}

/* 二叉搜索树的插入 */
BinTree* Insert(BinTree* bst, ElementType x)
{
  if (!bst) {
    bst = (BinTree*)malloc(sizeof(BinTree));
    bst->data = x;
    bst->left = NULL;
    bst->right = NULL;
  } else {
    if (x > bst->data)
      bst->right = Insert(bst->right, x);
    if (x < bst->data)
      bst->left = Insert(bst->left, x);
    /* when x == bst->data, do nothing. */
  }

  return bst;
}

/* 二叉搜索树的删除 */
BinTree* Delete(BinTree* bst, ElementType x)
{
  BinTree* targetTree = Find(bst, x);

  /* 1 如果是叶结点 */
  if (!targetTree->left && !targetTree->right) {
    targetTree = NULL;
  }

  /* 2 如果只有一个结点 */
  if (!targetTree->left && targetTree->right) {
    
  }
}
