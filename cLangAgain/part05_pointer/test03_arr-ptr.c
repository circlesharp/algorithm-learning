#include <stdio.h>

/* 数组作为参数 */
void arrAsParams(char a[])
{
  printf("sizeof(a) as params: %lu\n", sizeof(a)); // 指针的地址的字节 -> 4
}

/* 指针作为参数 -> 数组变量是特殊的指针 */
void ptrAsParams(char *a)
{
  printf("sizeof(a) as params: %lu\n", sizeof(a));
}

void arrVsPtr(char arr[])
{
  int *p = arr; // arr就是地址，不需要用 &arr
  printf("arr[0]: %c, p[0]: %c;\n", arr[0], p[0]); // 指针可以用[]运算符来取值

  printf("arr: %p, &arr[0]: %p;\n\n", arr, &arr[0]); // 数组的值不是指针
}

/* [] 运算符对指针适用 */
void varVsPtr()
{
  char c = 'c';
  int *p = &c;
  printf("c: %c, *p: %c, p[0]: %c\n\n", c, *p, p[0]); // 指针可以使用[]取值
}

/* 数据就是指针 */
void starToArr(char *arr)
{
  printf("arr[0]: %c, *arr: %c;\n\n", arr[0], *arr); // ptr[0] === *ptr
}

/* 数组是常量指针 */
void insideArrPtr()
{
  int a[3] = {1, 3, 5}; // int a[] -> int * const a，一个数组是一个常量指针
  int *p = a; // 所以 int b[] = a 不合法
  for (int i = 0; i < 3; i++)
    printf("%-4d", p[i]);
}

int main()
{
  char arr[4] = {'a', 'b', 'c', 'd'};
  arrAsParams(arr);
  ptrAsParams(arr);
  printf("sizeof(arr) as array: %lu\n\n", sizeof(arr)); // 4个字符的字节 -> 4

  arrVsPtr(arr);

  varVsPtr();

  starToArr(arr);

  insideArrPtr();

  return 0;
}