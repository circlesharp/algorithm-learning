#include <stdio.h>

/* 头文件: 桥梁、合同 */
/* 把函数原型放到一个头文件中，在需要调用函数的源代码中 #include 它 */
/* 让编译器在编译的时候知道函数的原型 */
#include "./test08_header.h"

/* #include 不是用来引入库的 */
/* #include 只把那个文件的内容原封不动地插入 */
/* 如 stdio.h 里只有 printf 的原型，printf 的源代码在另外的地方 */
/* 如没有 #include<stdlib.h> 也能使用 malloc, 编译器会认为是 int mallco(int) */

int main()
{
  printf("the max is: %.2f\n", getMax(1, 33));
  printf("the str is: %s\n", getStr());
  // printf("the getStaticInt is: %d\n", getStaticInt()); // wrong
  printf("publicNum: %d\n", publicNum);
  // printf("staticNum: %d\n", staticNum); // wrong

  return 0;
}
