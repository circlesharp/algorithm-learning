#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAXSIZE 20
#define ERROR -1

typedef int ElementType;

typedef struct {
  ElementType data[MAXSIZE];
  int last;
} List;

List* MakeEmpty();
bool Insert(List* listPtr, ElementType x, int i);
bool Delete(List* listPtr, int i);
int Find(List* listPtr, ElementType x);

int main()
{
  /* MakeEmpty */
  List* list = MakeEmpty();
  printf("%d\n", sizeof(*list));

  /* Insert */
  Insert(list, 1, 0);
  Insert(list, 0, 1);
  Insert(list, 1, 2);
  Insert(list, 2, 3);
  Insert(list, 1, 4);
  Insert(list, 4, 5);
  Insert(list, 222, 1);
  Insert(list, 555, 4);
  print(list);

  /* Delete */
  Delete(list, 0);
  Delete(list, 4);
  print(list);

  /* Find */
  printf("Find(list, 555): %d\n", Find(list, 555));
  printf("Find(list, 555): %d\n", Find(list, 666));

  return 0;
}

List* MakeEmpty()
{
  List* listPtr = (List*)malloc(sizeof(List));
  listPtr->last = -1;
  return listPtr;
}

bool Insert(List* listPtr, ElementType x, int i)
{
  /* 检查表空间 */
  if (i > MAXSIZE - 1) return false;
  
  /* 检查次序合法性 */
  if (i < 0 || i > listPtr->last + 2) return false;

  /* 往后挪 */
  for (int j = listPtr->last; j >= i; j--)
    listPtr->data[j + 1] = listPtr->data[j];
  
  /* 插入 */
  listPtr->data[i] = x;
  listPtr->last += 1;
  
  return true;
}

bool Delete(List* listPtr, int i)
{
  /* 检查次序合法性 */
  if (i < 0 || i > listPtr->last) return false;

  /* 往前挪 */
  for (int j = i; j < listPtr->last; j++)
    listPtr->data[j] = listPtr->data[j + 1];

  listPtr->last -= 1;

  return true;
}

int Find(List* listPtr, ElementType x)
{
  for (int i = 0; i <= listPtr->last; i++) {
    if (listPtr->data[i] == x) return i;
  }
  return ERROR;
}

void print(List* listPtr)
{
  for (int i = 0; i <= listPtr->last; i++)
    printf("%-4d", listPtr->data[i]);
  printf("\n");
}
