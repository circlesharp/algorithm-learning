#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include "../utils/CreateList.h"

#define NOTFOUND -1

int binary_search(List* list, ElementType x);

int main()
{
  List* list = createSequentialList(20);

  print(list);

  printf("the position of 31 is %d\n", binary_search(list, 31));
  printf("the position of 215 is %d\n", binary_search(list, 215));

  return 0;
}

int binary_search(List* list, ElementType x)
{
  int left = 0;
  int right = list->length - 1;
  int mid;

  while(left <= right) {
    mid = (right + left) / 2;
    ElementType midData = FindKthNode(list, mid)->data;
    if (x < midData)
      right = mid - 1;
    else if (x > midData)
      left = mid + 1;
    else
      return mid;
  }

  return NOTFOUND;
}
