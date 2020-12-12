#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include "../resource/LinkList.h"

List* createList(int n)
{
  List* list = MakeEmpty();
  for (int i = 0; i < n; i++) {
    int r = rand();
    Insert(list, r, i);
  }
  print(list);
  return list;
}
