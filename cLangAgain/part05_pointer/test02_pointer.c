#include <stdio.h>

void basicPointer()
{
  int i;

  /*
  1. p 是一个指针，指向一个 int，我们把 i 的地址交过去
  2. p 指向 i => p 保存 i 的地址
  */
  int* p = &i;
  printf("size of p is: %d\n", sizeof(p));
}

void pointAsParams()
{
  int i = 6;
  printf("&i=%p\n", &i);
  f(&i);
  printf(" i=%d\n", i);
}

void f(int *p)
{
  printf(" p=%p\n", p);
  printf("*p=%d\n", *p); // 右值 读
  *p = 26; //  左值 写
}

int main()
{
  /* 指针就是保存地址的变量 */
  basicPointer();

  /* 指针作为参数，使得函数有读写(访问和修改)外面变量的能力 */
  pointAsParams();

  /* ps scanf 没有传地址的话，编译可能不会知道出错，因为 int 和 ptr 可能都是 32bit */

  return 0;
}