#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include "../resource/LinkList.h"
#include "../utils/CreateList.h"

#define NOTFOUND -1

int sequential_search(List* list, ElementType x);

int main()
{
  List* list = createRandomList(20);

  print(list);

  printf("the position of 19 is %d\n", sequential_search(list, 19));
  printf("the position of 215 is %d\n", sequential_search(list, 215));

  return 0;
}

int sequential_search(List* list, ElementType x)
{
  int len = list->length;
  int i = 0;

  /* 建立哨兵 */
  Insert(list, x, len);

  while(FindKthNode(list, i)->data != x)
    i += 1;

  Delete(list, len);

  return i == len ? NOTFOUND : i;
}

