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
void Traversal(BinTree* binTree); /* 二叉树遍历 */
void InorderTraversal(BinTree* binTree); /* 中序遍历 LVR */
void PreorderTraversal(BinTree* binTree); /* 先序遍历 VLR */
void PostorderTraversal(BinTree* binTree); /* 后序遍历 LRV */
void LevelorderTraversal(BinTree* binTree); /* 层序遍历 LRV */
BinTree* CreateBinTree();

int main()
{
  ElementType treeData[] = {1, 2, 3, 4, 5, 6, 7, 0, 0, 10, 0, 0, 13, 0, 0, 0, 0, 0, 0};
  BinTree* binTree = CreateBinTree(treeData, sizeof(treeData) / sizeof(treeData[0]));

  
  {
    /* test 生成 */
    printf("1: %d\n", binTree->data);
    printf("4: %d\n", binTree->left->left->data);
    printf("10: %d\n", binTree->left->right->left->data);
  }

  {
    /* test IsEmpty */
    printf("empty? %d\n", IsEmpty(binTree));
    printf("empty? %d\n", IsEmpty(binTree->left->left));
    printf("empty? %d\n", IsEmpty(binTree->left->left->left));
  }

  {
    /* Traversal */
    InorderTraversal(binTree);
    printf("\n");
    PreorderTraversal(binTree);
    printf("\n");
    PostorderTraversal(binTree);
    printf("\n");
    LevelorderTraversal(binTree);
    printf("\n");
  }

  return 0;
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

/* 二叉树遍历(中序) */
void Traversal(BinTree* binTree)
{
  // 需要用堆栈实现
}


/* 中序遍历 LVR */
void InorderTraversal(BinTree* binTree)
{
  if (binTree == NULL) return;
  InorderTraversal(binTree->left);
  printf("%-6d", binTree->data);
  InorderTraversal(binTree->right);
}

/* 先序遍历 VLR */
void PreorderTraversal(BinTree* binTree)
{
  if (binTree == NULL) return;
  printf("%-6d", binTree->data);
  InorderTraversal(binTree->left);
  InorderTraversal(binTree->right);
}

/* 后序遍历 LRV */
void PostorderTraversal(BinTree* binTree)
{
  if (binTree == NULL) return;
  InorderTraversal(binTree->left);
  InorderTraversal(binTree->right);
  printf("%-6d", binTree->data);
}

/* 层序遍历 LRV */
void LevelorderTraversal(BinTree* binTree)
{
  if (binTree == NULL) return;

  /* 创建队列 */
  Queue* nodeQueue = CreateQueue(100);
  AddQ(nodeQueue, binTree);

  /* 遍历 */
  while (!IsQueueEmpty(nodeQueue)) {
    BinTree* tempTree = DeleteQ(nodeQueue);
    printf("%-6d", tempTree->data);
    if (tempTree->left) AddQ(nodeQueue, tempTree->left);
    if (tempTree->right) AddQ(nodeQueue, tempTree->right);
  }
}
