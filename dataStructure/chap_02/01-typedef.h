#include<stdio.h>

typedef int ElementType;
ElementType Max(ElementType S[], int N)
{
  ElementType CurMax = S[0];
  for (int i = 0; i < N; i++)
    if (S[i] > CurMax) CurMax = S[i];
  return CurMax;
}

char *_main()
{
  int testArr[5] = {1, 2, 3, 4, 5};
  int rst = Max(testArr, 5);
  printf("the rst is: %d", rst);
  return "char_02, 01-typedef";
}
