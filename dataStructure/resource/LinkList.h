#ifndef _LINK_LIST_H_
#define _LINK_LIST_H_

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define ERROR -1

typedef int ElementType;

typedef struct _node {
  ElementType data;
  struct _node* next;
} Node;

typedef struct {
  Node* head;
  Node* tail;
  int length;
} List;

List* MakeEmpty();
Node* FindKthNode(List* listPtr, int i);
ElementType FindKth(List* listPtr, int i);
int Find(List* listPtr, ElementType x);
bool Insert(List* listPtr, ElementType x, int i);
bool Delete(List* listPtr, int i);
int Length(List* listPtr);
void printList(List* listPtr);

List* MakeEmpty()
{
  List* listPtr = (List*)malloc(sizeof(List));
  listPtr->head = NULL;
  listPtr->tail = NULL;
  listPtr->length = 0;
  return listPtr;
}

bool Insert(List* listPtr, ElementType x, int i)
{
  Node* nodePtr = (Node*)malloc(sizeof(Node));
  nodePtr->data = x;
  nodePtr->next = NULL;

  /* 检查表是否为空 */
  /* 不需要检查是否是尾，因为 tail->next 的 NULL 会给到插入的节点 */
  if (listPtr->head == NULL) {
    listPtr->head = nodePtr;
    listPtr->tail = nodePtr;
  } else {
    Node* preNodePtr = FindKthNode(listPtr, i - 1);
    if (!preNodePtr)
      return false;
    nodePtr->next = preNodePtr->next;
    preNodePtr->next = nodePtr;
  }

  listPtr->length += 1;
  return true;
}

Node* FindKthNode(List* listPtr, int i)
{
  int idx = 0;
  Node* tmpNodePtr = (Node*)malloc(sizeof(Node));
  tmpNodePtr = listPtr->head;
  while (idx < i) {
    tmpNodePtr = tmpNodePtr->next;
    idx += 1;
  }
  return tmpNodePtr;
}

ElementType FindKth(List* listPtr, int i)
{
  Node* tmpNodePtr = (Node*)malloc(sizeof(Node));
  tmpNodePtr = FindKthNode(listPtr, i);
  if (tmpNodePtr)
    return tmpNodePtr->data;
  return ERROR;
}

int Find(List* listPtr, ElementType x)
{
  Node* tmpNodePtr = (Node*)malloc(sizeof(Node));
  tmpNodePtr = listPtr->head;
  int idx = 0;

  while (tmpNodePtr) {
    if (tmpNodePtr->data == x)
      return idx;
    tmpNodePtr = tmpNodePtr->next;
    idx += 1;
  }
  return ERROR;
}

bool Delete(List* listPtr, int i)
{
  Node* tmpNodePtr = (Node*)malloc(sizeof(Node));
  Node* preNodePtr = (Node*)malloc(sizeof(Node));

  /* 超出范围 */
  if (i > listPtr->length || i < 0)
    return false;

  tmpNodePtr = FindKthNode(listPtr, i);

  /* i = 0 */
  if (i == 0) {
    listPtr->head = tmpNodePtr->next;
  } else {
    preNodePtr = FindKthNode(listPtr, i - 1);
    preNodePtr->next = tmpNodePtr->next;
  }

  free(tmpNodePtr);
  listPtr->length -= 1;
  return true;
}

int Length(List* listPtr)
{
  return listPtr->length;
}

void printList(List* listPtr)
{
  Node* tmpNodePtr = (Node*)malloc(sizeof(Node));
  tmpNodePtr = listPtr->head;
  int idx = 0;

  printf("\n------ printing ------\nindex\tdata\tpointer\n----------------------\n");
  while (tmpNodePtr) {
    printf("%d\t%d\t%p\n", idx, tmpNodePtr->data, tmpNodePtr);
    tmpNodePtr = tmpNodePtr->next;
    idx += 1;
  }
  printf("\nthe lenght: %d\n", Length(listPtr));
  printf("------ the end ------\n");
}

#endif
