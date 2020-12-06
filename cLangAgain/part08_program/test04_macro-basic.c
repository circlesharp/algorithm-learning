/* 编译预处理指令 */
/* 1. #开头的是编译预处理指令 */
/* 2. 不是 C语言 的成分，但是 C 离不开它们 */
/* 3. #define 定义一个宏 */

#include <stdio.h>

/* .c -编译预处理-> .i -变成汇编-> .s -汇编-> .o -链接-> .out */
/* 替换，原始的文本替换 */
/* 不加分号（因为不是 c 的语句） */
#define PI 3.14159

/* 可以有其他宏 */
/* 可以有注释 */
#define PI2 2 * PI // pi * 2

/* 可以换行 */
#define PRT printf("%f\t", PI); \
            printf("%f\n", PI2)

/* 预定义的宏 */
/* __LINE__, __FILE__, __DATE__, __TIME__, __STDC__ */
void preMacro()
{
  printf("%s:%d\n", __FILE__, __LINE__);
  printf("%s, %s", __DATE__, __TIME__);
}

int main()
{
  PRT;
  preMacro();

  return 0;
}
