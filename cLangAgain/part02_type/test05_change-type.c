#include <stdio.h>

int main()
{
  // 1. 自动类型转换。。。对于 printf，小于 int(double) 的类型都会被自动转换为 int(double)

  // 2. 强制类型转换 要注意安全性
  int i = 32768;
  printf("%d\n", (short)i); // short 最多 32767
  printf("%d\n", (char)i); // char 最多 127
  printf("i is still %d\n", i); // 不会改变原来的变量，而是计算新的值
  return 0;
}