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
void print(List* listPtr);

int main()
{
  /* MakeEmpty */
  List* list = MakeEmpty();
  printf("sizeof(*list): %d\n\n", sizeof(*list)); // 8 两个指针变量

  /* Insert */
  Insert(list, 1, 0);
  Insert(list, 2, 1);
  Insert(list, 3, 2);
  Insert(list, 4, 3);
  Insert(list, 5, 4);
  Insert(list, 6, 5);
  Insert(list, 777, 1);
  Insert(list, 888, 4);

  /* FindKth */
  printf("FindKth(list, 2): %d\n", FindKth(list, 2));
  printf("FindKth(list, 4): %d\n", FindKth(list, 4));
  printf("FindKth(list, 8): %d\n\n", FindKth(list, 8));

  /* Find */
  printf("Find(list, 777): %d\n", Find(list, 777));
  printf("Find(list, 3): %d\n", Find(list, 3));
  printf("Find(list, 233): %d\n\n", Find(list, 233));

  print(list);

  /* Delete */
  Delete(list, 0);
  Delete(list, -1);
  Delete(list, 8);
  Delete(list, 3);
  Delete(list, 3);
  
  print(list);

  return 0;
}

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

void print(List* listPtr)
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
