/* AVL 树 */

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef int ElementType;
typedef struct _AVLTree {
  ElementType data;
  struct _AVLTree* left;
  struct _AVLTree* right;
  int height;
} AVLTree;

int Max(int a, int b)
{
  return a > b ? a : b;
}

int GetHeight(AVLTree* avlTree)
{
  if (!avlTree) return 0;
  return avlTree->height;
}

/* 左单旋 */
AVLTree* SingleLeftRotation(AVLTree* a)
{
  AVLTree* b = a->left;
  a->left = b->right;
  b->right = a;

  a->height =
    Max(GetHeight(a->left), GetHeight(a->right)) + 1;
  b->height =
    Max(GetHeight(b->left), a->height) + 1;

  return b;
}

/* 右单旋 */
AVLTree* SingleRightRotation(AVLTree* a);

/* 左-右双旋 */
AVLTree* DoubleLeftRightRotation(AVLTree* a)
{
  a->left = SingleRightRotation(a->left);
  return SingleLeftRotation(a);
}

/* 将 x 插入到 AVL树 中，并返回调整后的 AVL树 */
AVLTree* Insert(AVLTree* avlTree, ElementType x)
{
  /* 1 插入空树 */
  if (!avlTree) {
    avlTree = (AVLTree*)malloc(sizeof(AVLTree));
    avlTree->data = x;
    avlTree->height = 1;
    avlTree->left = NULL;
    avlTree->right = NULL;
  }

  /* 2 插入左子树 */
  else if (x < avlTree->data) {
    avlTree->left = Insert(avlTree->left, x);
    if (GetHeight(avlTree->left) - GetHeight(avlTree->right) == 2)
      if (x < avlTree->left->data)
        avlTree = SingleLeftRotation(avlTree);
      else
        avlTree = DoubleLeftRightRotation(avlTree);
  }

  /* 3 插入右子树 */

  /* 4 无需插入 (x == avlTree->data) */

  /* 5 更新树高 */
  avlTree->height =
    Max(GetHeight(avlTree->left), GetHeight(avlTree->right)) + 1;
  
  return avlTree;
}
