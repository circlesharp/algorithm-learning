#include <stdio.h>

/* 像函数一样的宏 */
#define cube(x) ((x)*(x)*(x)) // 要加括号，因为有可能是表达式

/* 一切都要有括号 */
/* 1. 整个值要括号 */
/* 2. 参数出现的地方要有括号 */
#define rad2deg(x) ((x) * 57.29578)

int main()
{
  printf("%d\n", cube(4+1));
  printf("%.2f\n", rad2deg(3.14));

  return 0;
}