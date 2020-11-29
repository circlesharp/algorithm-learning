#include <stdio.h>

void cheer(int i); // 函数声明(declaration)、原型(prototype)
void swap(int *a, int *b);
void funContext(int c, int d);

int main()
{
  // cheer(2.3); // shoule be warning~, 这是 c 不好的地方，编译器会悄悄自动类型转换

  // int a = 1, b = 2;
  // swap(&a, &b);
  // printf("after swap, a=%d, b=%d\n", a, b); 

  return 0;
}

/* 1. 传参会发生自动类型转换 */
void cheer(int i) // 函数定义
{
  printf("Cheer %d\n", i);
}

/* 2. 值传递（调用函数时，只能传值给函数） */
void swap(int *a, int *b)
{
  int temp = *a;
  *a = *b;
  *b = temp;
}

/* 3. 每个函数有自己的变量空间，参数也位于这个独立空间中，和其他函数没有关系 */
void funContext(int c, int d)
{
  printf("c=%d, d=%d", c, d);
  // printf("the a in main is %d", a); // error! 函数的上下文是独立的
}

/* 4. 淡化形参和实参，改用 参数 和 值 */
