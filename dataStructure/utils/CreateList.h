#ifndef _CREATE_LIST_H_
#define _CREATE_LIST_H_

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include "../resource/LinkList.h"

List* createRandomList(int n)
{
  List* list = MakeEmpty();
  for (int i = 0; i < n; i++) {
    int r = rand() % 20 + 1;
    Insert(list, r, i);
  }
  return list;
}

List* createSequentialList(int n)
{
  List* list = MakeEmpty();
  for (int i = 0; i < n; i++)
    Insert(list, i * 2 + rand() % 2, i);
  return list;
}

#endif
