#include <stdio.h>
#include <stdlib.h>

typedef struct _node {
  int value;
  struct _node* next;
} Node;

/* 优雅地定义链表 */
typedef struct {
  Node* head;
  Node* tail;
} List;

void add(List* pList, int number);
void print(List* pList);
void del(List* pList, int value);
void clear(Node* node);

int main()
{
  int number = 0;
  List list;
  list.head = NULL;
  while (1) {
    scanf("%d", &number);
    if (number == -1)
      break;
    add(&list, number);
  }

  print(&list);

  scanf("%d", &number);
  del(&list, number);

  print(&list);

  clear(list.head);

  return 0;
}

void add(List* pList, int number)
{
  Node* p = (Node*)malloc(sizeof(Node));
  p->value = number;
  p->next = NULL;

  if (!pList->head)
    pList->head = p;
  else
    pList->tail->next = p;

  pList->tail = p;
}

void print(List* pList)
{
  /* 经典的链表遍历 */
  for (Node* p = pList->head; p; p = p->next)
    printf("%-4d", p->value);
  printf("\n");
}

void del(List* pList, int value)
{
  Node* p = pList->head;
  Node* q = NULL;

  while (p) {
    if (p->value == value) {
      if (q)
        q->next = p->next;
      else
        pList->head = p->next;
      free(p);
      break;
    }

    q = p;
    p = p->next;
  }
}

void clear(Node* node)
{
  // printf("%p: %d\n", node, node->value);
  Node* next = node->next;
  if (next)
    clear(next);
  free(node);
}
