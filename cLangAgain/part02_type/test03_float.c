#include <stdio.h>
#include <stdbool.h>
#include <math.h>

/* 浮点数可以表达 inf, nan */
void infNan()
{
  printf("%f\n", 12.0 / 0.0); // inf
  printf("%f\n", -12.0 / 0.0); // -inf
  printf("%f\n", 0.0 / 0.0); // nan
  // printf("%d\n", 12 / 0); // 不合法，浮点数可以表示 inf & -inf, int 不行
}

/* 浮点数比较相等 */
bool isEqual(float a, float b)
{
  return fabs(a - b) < 1e-12;
}

/*
:::浮点数的精度:::
1. float 只有7位有效
2. double 只有15位有效
*/
void precise()
{
  float a, b, c;
  a = 1.345f; // 带 f 后缀表明 float, 不带则是 double
  b = 1.123f;
  c = a + b;
  printf("c=%.10f, or %f\n", c, c);
  printf("c == 2.468 ? %d", isEqual(c, 2.468));
}

int main()
{
  infNan();
  precise();  
  return 0;
}