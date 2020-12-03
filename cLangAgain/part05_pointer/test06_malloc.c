#include <stdio.h>
#include <stdlib.h>

void basicMalloc()
{
  // 1. 依赖 stdlib.h
  // 2. void* malloc (size_t size)
  // 3. 向 malloc 申请空间的大小是以字节为单位的
  // 4. malloc 返回的结果是 void*, 需要强制类型转换
  // 5. (int*)malloc(n * sizeof(int))
  // 6. 如果申请失败，会返回NULL(0)
  // 7. free: 出来混要还，而且是原封不动
  // 8. 新手容易忘记free, 老手找不到合适的free时机
  // 9. 错误：free过了再free, 地址变了去free
}

void failMalloc()
{
  void *p;
  int cnt = 0;
  while (p = malloc(100 * 1024 * 1024)) // 每次申请 100MB
    cnt++;

  printf("allocate %d00MB\n", cnt);
}

void mallocArr()
{
  /* 确定输入个数 */
  int number;
  printf("please input the number:");
  scanf("%d", &number);

  /* 输入，相当于 int a[number] */
  int* a = (int*)malloc(number * sizeof(int));
  for(int i = 0; i < number; i++)
    scanf("%d", &a[i]);

  /* 倒序输出 */
  for (int i = number - 1; i >= 0; i--)
    printf("%d: %d\t", i, a[i]);

  /* 释放内存空间 */
  free(a);
}

void freeMalloc()
{
  /* 良好的习惯是初始指针先赋值0 */
  void *p = NULL;

  /* 有可能没有 malloc, 或者 malloc 失败了 */
  p = malloc(10);

  /* 可以 free(NULL) */
  free(p);
}

int main()
{
  basicMalloc();

  // failMalloc();

  freeMalloc();

  mallocArr();

  return 0;
}