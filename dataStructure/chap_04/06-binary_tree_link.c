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
BinTree* CreateBinTree();

int main()
{
  ElementType treeData[] = {1, 2, 3, 4, 5, 6, 7, 0, 0, 10, 0, 0, 13, 0, 0, 0, 0, 0, 0};
  BinTree* binTree = CreateBinTree(treeData, sizeof(treeData) / sizeof(treeData[0]));

  return 0;
}

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
