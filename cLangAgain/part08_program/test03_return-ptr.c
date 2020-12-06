#include <stdio.h>
#include <stdlib.h>

/* 在我的环境里，无报错，程序崩溃 */
/* 本地变量的地址在函数结束的时候会被重新分配 */
/* 房子被收回去了，业主已经租给别人了，留着钥匙有什么用 */
int* f()
{
  int i = 12;
  return &i;
}

void g()
{
  int k = 24;
  printf("k: %d", k);
}

/* 1. 返回本地变量的地址是危险的 */
/* 2. 返回全局变量或静态本地变量是安全的 */
/* 3. 返回在函数内 malloc 的内存是安全的，但是容易造成问题 */
/* 4. 最好的方法是返回传入的指针 */
/* 5. 使用全局变量和静态本地变量的函数是线程不安全的 */

int* s(int* ptr)
{
  printf("%-4s: %p\n", __func__, ptr);
  int i = 12;
  *ptr = i;
  return ptr;
}

int main()
{
  int* p = (int*)malloc(sizeof(int)); // 要用 malloc 分配空间才可以
  printf("%-4s: %p\n", __func__, p);
  s(p);

  printf("*p: %d\n", *p);

  free(p);

  return 0;
}