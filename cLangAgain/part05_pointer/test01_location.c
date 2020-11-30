#include <stdio.h>

void basicLocation()
{
  int i = 0;
  int p;
  int q;
  printf("0x%x\n", &i); // 用16进制输出地址
  printf("i: %p\n", &i); // %p 作为地址输出
  printf("p: %p\n", &p);
  printf("q: %p\n", &q);

  /*
  ps
  相差一个 int 的 size
  但是 i 会比 p 更高
  因为储存在堆栈，先进的高
  (但我不是很理解，队尾不是不适合删除吗)
  */
}

void arrayLocation()
{
  int a[10];
  printf("&a:\t%p\n", &a);
  printf("a:\t%p\n", a);
  printf("&a[0]:\t%p\n", &a[0]);
  printf("&a[1]:\t%p\n", &a[1]);
}

int main()
{
  basicLocation();
  arrayLocation();

  return 0;
}
