#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define ERROR -1

typedef int ElementType;

typedef struct {
  struct _GNode* head;
  int length;
} GList;

typedef struct _GNode {
  /* 标志域  0 表示单元素  1 表示广义表 */
  int tag;
  /* 子表指针域 sublist  单元素数据域 data  共用存储空间   */
  union {
    ElementType data;
    struct _GNode* sublist;
  };
  struct _GNode* next;
} GNode;

GList* MakeEmpty();
GNode* CreateNode(int tag, ElementType data, GList* sublist);
GNode* FindKthNode(GList* list, int idx);
bool Insert(GList* list, GNode* node, int idx);
void print(GList* list);

int main()
{
  GList* list = MakeEmpty();

  GNode* n1 = CreateNode(0, 1, NULL);

  GList* _n2 = MakeEmpty();
  GNode* n2 = CreateNode(1, NULL, _n2);

  Insert(list, n1, 0);
  bool rst = Insert(list, n2, 1);

  printf("Insert result: %d\n", rst);

  print(list);

  return 0;
}

GList* MakeEmpty()
{
  GList* list = (GList*)malloc(sizeof(GList));
  list->head = NULL;
  list->length = 0;
  return list;
}

GNode* CreateNode(int tag, ElementType data, GList* sublist)
{
  GNode* node = (GNode*)malloc(sizeof(GNode));
  node->tag = tag;
  if (tag == 0 && data != NULL) {
    node->data = data;
  }
  if (tag == 1 && sublist != NULL) {
    node->sublist = sublist;
  }
  node->next = NULL;
  return node;
}

bool Insert(GList* list, GNode* node, int idx)
{
  /* 检查位置合法性 */
  if (idx < 0 || idx > list->length)
    return false;

  GNode* tempNode = FindKthNode(list, idx);
  if (idx == 0) {
    list->head = node;
  } else {
    GNode* preNode = FindKthNode(list, idx - 1);
    preNode->next = node;
  }
  node->next = tempNode;
  list->length += 1;
  return true;
}

GNode* FindKthNode(GList* list, int idx)
{
  if (idx < 0 || idx > list->length)
    return NULL;

  int i = 0;
  GNode* tmpNode = (GNode*)malloc(sizeof(GNode));
  tmpNode = list->head;
  while (i < idx) {
    tmpNode = tmpNode->next;
    i += 1;
  }
  return tmpNode;
}

void print(GList* list)
{
  GNode* tempNode = (GNode*)malloc(sizeof(GNode));
  tempNode = list->head;
  int idx = 0;

  printf("\n------ printing ------\nindex\ttag\tdata\\pointer\n----------------------\n");
  while (tempNode) {
    if (tempNode->tag == 0)
      printf("%d\t%d\t%d\n", idx, tempNode->tag, tempNode->data);
    if (tempNode->tag == 1)
      printf("%d\t%d\t%p\n", idx, tempNode->tag, tempNode->sublist);
    tempNode = tempNode->next;
    idx += 1;
  }
}
