#include <stdio.h>

/* 给指针 + 1，不是地址 + 1，而是地址+sizeof(所指的类型) */
/* 也就是让指针移到下一个单元去 */
void ptrPlusOne()
{
  char arrChar[] = {1, 2, 3, 4};
  int arrInt[] = {1, 2, 3, 4};
  char *p = arrChar;
  int *q = arrInt;
  
  printf("p: %p, p+1=%p;\n", p, p + 1);
  printf("q: %p, q+1=%p;\n", q, q + 1);
}

/* 对数组操作 *(p+n) === arr[n] */
void ptrPlusOneArr()
{
  int arrInt[] = {1, 2, 3, 4};
  int *p = arrInt;
  printf("arrInt[1]: %d, *(p+1): %d, *(arrInt+1): %d;\n", arrInt[1], *(p + 1), *(arrInt+1));
}

/* 指针 - 指针 = 地址的距离 / sizeof(所指的类型) */
void ptrMinusPtr()
{
  int arr[] = {1, 2, 3, 4, 5};
  int *p = arr; // arr === &(arr[0])
  int *q = &(arr[4]);
  printf("p: %p, q: %p, q-p: %d;\n", p, q, q - p);
}

/* *p++：取出p所指的数据，完事之后顺便把p移到下一个位置 */
/* ++ 优先级比 * 高 */
void starPtrPlusPlus()
{
  int arr[] = {1, 2, 3, 4, 5, -1}; // -1作为哨兵（字符串也有哨兵）
  for (int *p = arr; *p != -1; )
    printf("%-4d", *p++);

  int *q = arr;
  while (*q != -1)
    printf("%-4d", *q++);
}

void zeroPtr()
{
  // 0地址
  // NULL 是一个预定定义的符号，表示 0地址
  // 作用1：返回的指针无效
  // 作用2：指针没有被真正初始化
}

void ptrType()
{
  // 无论指向什么类型，指针大小都一样（地址的长度一样）
  // 指针也是有类型的，所以不同地址的指针不能直接赋值

  // 但，可以作为强制类型转换 void*
  int i;
  int *p = &i;
  void *q = (void*)p; // 通过 q 看 i，认为 i 不是 int, 认为什么都不是
}

int main()
{
  ptrPlusOne();

  ptrPlusOneArr();

  ptrMinusPtr();

  starPtrPlusPlus();

  zeroPtr();

  ptrType();

  return 0;
}