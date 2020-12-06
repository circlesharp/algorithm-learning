#include <stdio.h>

int gAll = 12;

int useStatic()
{
  /* 静态本地变量 */
  static int all = 1;
  printf("in %s all=%d\n", __func__, all);
  all += 2;
  printf("agn in %s all=%d\n", __func__, all);

  /* 实际上，静态本地变量是全局变量 */
  printf("&gAll: %p, &all: %p;\n", &gAll, &all);

  /* 静态本地变量具有全局的生存期，函数内的局部作用域 */

  return all;
}

int main()
{
  // useStatic();
  useStatic();

  return 0;
}
