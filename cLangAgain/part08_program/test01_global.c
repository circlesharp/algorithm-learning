#include <stdio.h>

int gAll = 12;

int f()
{
  printf("in %s gAll=%d\n", __func__, gAll);
  gAll += 2;
  printf("agn in %s gAll=%d\n", __func__, gAll);
  return gAll;
}

int main()
{
  printf("in %s gAll=%d\n", __func__, gAll);
  f();
  printf("agn in %s gAll=%d\n", __func__, gAll);

  return 0;
}