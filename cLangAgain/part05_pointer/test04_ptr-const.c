#include <stdio.h>

/* 指针是 const: 一旦指向某变量，就不能指向其他变量 */
void constPtrAfterStar()
{
  int i = 1;
  int * const p = &i; // p 被 const

  *p = 27; // ok
  // p++; // wrong
}

/* 所指的是 const: 不可以通过地址修改所指的变量的值(不能通过 ptr 去修改) */
void constPtrBeforeStar()
{
  int i = 1;
  const int *p = &i; // *p 被 const
  int const * q = &i; // 等价（const 在 * 前面）
 
  i = 27; // ok
  p++; // ok
  // *p = 28; // wrong
}

/* 给我一个指针，我保证不动指针里面的值 */
void toConst(const int * i)
{
  // 当要传递的参数类型比地址大的时候（比如结构）
  // 这是常用手段
  // 既能用较少的字节数传值给参数
  // 也能避免函数对外面的变量的修改
}

/* cosnt 数组 */
void constArr(const int arr[])
{
  // 保护数组值
  // 为了保护数组不被函数破坏
}

int main()
{
  /* 指针不可修改 */
  constPtrAfterStar();

  /* 通过指针不可修改 */
  constPtrBeforeStar();

  /* 转换 */
  int i = 1;
  toConst(&i);

  /* const 数组 */
  const int a[] = {1, 2, 3, 4}; // 指针不可修改，且通过指针不可修改
  int b[] = {1, 2, 3, 4};
  constArr(b);

  return 0;
}