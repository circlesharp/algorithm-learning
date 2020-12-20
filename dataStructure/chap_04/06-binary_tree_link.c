/* 二叉树 链式存储 */

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include "../resource/LinkQueue.h"

#define ERROR -1
#define NoInfo 0

typedef int ElementType;

typedef struct _BinTree {
  ElementType data;
  struct _BinTree* left;
  struct _BinTree* right;
} BinTree;

bool IsEmpty(BinTree* binTree);
void Traversal(BinTree* binTree); /* 二叉树遍历 */
BinTree* CreateBinTree();

