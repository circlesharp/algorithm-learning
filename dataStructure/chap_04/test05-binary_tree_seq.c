#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define ERROR -1
#define MAX_LENGTH 20

typedef char ElementType;

typedef struct {
  ElementType data;
  int idx;
} Node;

typedef struct {
  Node data[MAX_LENGTH + 1];
  int length;
} BinaryTree;

BinaryTree* Create(const ElementType rawData[], int len);
Node* FindKthNode(BinaryTree* tree, int idx);
Node* GetParent(BinaryTree* tree, Node* node);
Node* GetChildLeft(BinaryTree* tree, Node* node);
Node* GetChildRight(BinaryTree* tree, Node* node);
void print(BinaryTree* tree);

int main()
{
  char rawData[] = { 'A', 'B', 'O', 'C', 'S', 'M', 'Q', 'W', 'K' };
  BinaryTree* tree = Create(rawData, sizeof(rawData) / sizeof(rawData[0]));

  Node* node04 = FindKthNode(tree, 4);
  Node* node05 = FindKthNode(tree, 5);
  printf("the parent of node04: %c\n", GetParent(tree, node04)->data);
  printf("the parent of node05: %c\n", GetParent(tree, node05)->data);

  printf("the left child of node04: %c\n", GetChildLeft(tree, node04)->data);
  printf("the right child of node04: %c\n", GetChildRight(tree, node04)->data);
  printf("the left child of node05: %p\n", GetChildLeft(tree, node05));

  // print(tree);
  return 0;
}

BinaryTree* Create(const ElementType rawData[], int len)
{
  BinaryTree* tree = (BinaryTree*)malloc(sizeof(BinaryTree));
  tree->length = len;

  for (int i = 1; i <= len; i++) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->data = rawData[i - 1];
    node->idx = i; // 索引从 1 开始
    tree->data[i] = *node;
  }

  return tree;
}

Node* FindKthNode(BinaryTree* tree, int idx)
{
  if (idx > tree->length) return NULL;
  return &(tree->data[idx]);
}

Node* GetParent(BinaryTree* tree, Node* node)
{
  int parentIdx = node->idx / 2;
  return FindKthNode(tree, parentIdx);
}

Node* GetChildLeft(BinaryTree* tree, Node* node)
{
  int childLeftIdx = node->idx * 2;
  return FindKthNode(tree, childLeftIdx);
}

Node* GetChildRight(BinaryTree* tree, Node* node)
{
  int childRightIdx = node->idx * 2 + 1;
  return FindKthNode(tree, childRightIdx);
}

void print(BinaryTree* tree)
{
  printf("idx\tvalue\n-------------\n");
  for (int i = 1; i <= tree->length; i++)
    printf("%d\t%c\n", i, tree->data[i]);
  printf("-----end-----");
}
