#include <stdio.h>
#define SIZE 5

void arrInit()
{
  /* 1. 集成初始化 */
  int a[] = {1, 2, 3, 4, 5};

  /* 2.  */
  int b[SIZE] = {1};

  /* 3. 集成初始化时定位，适合稀疏的数据 */
  int c[SIZE] = {
    [0] = 4,
    [3] = 3, 4,
  };

  for(int i = 0; i < SIZE; i++)
    printf("a: %d, b: %d, c: %d\n", a[i], b[i], c[i]);
}

void plainArrSize()
{
  int a[10];
  double b[10];

  printf("sizeof(a): %d Byte, sizeof(b): %d Byte.\n", sizeof(a), sizeof(b));
}

void getArrSize()
{
  int a[10];
  int size = sizeof(a) / sizeof(a[0]);

  printf("the length of array a is: %d.\n", size);
}

int main()
{
  arrInit();

  plainArrSize();

  // ps 数组作为函数的参数时，往往必须再用另一个参数来传入数组的大小
  getArrSize();

  return 0;
}