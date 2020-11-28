#include <stdio.h>
#include <stdbool.h>

void usingSizeof()
{
  printf("sizeof char %d\n", sizeof(char));
  printf("sizeof bool %d\n", sizeof(bool));
  printf("sizeof short %d\n", sizeof(short));
  printf("sizeof int %d\n", sizeof(int));
  printf("sizeof long %d\n", sizeof(long));
  printf("sizeof long long %d\n", sizeof(long long));
  printf("sizeof float %d\n", sizeof(float));
  printf("sizeof double %d\n", sizeof(double));
  printf("sizeof long double %d\n", sizeof(long double));
}

void usingSizeofVar()
{
  int a = 6;
  printf("sizeof a %d\n", sizeof(a));

  /* sizeof 里面是静态的，不会改变变量的值 */
  printf("sizeof a++ %d\n", sizeof(a++));
  printf("sizeof a + 1.0 %d\n", sizeof(a + 1.0));
  printf("a is still %d, not changes.\n", a);
}

int main()
{
  usingSizeof();
  usingSizeofVar();
  return 0;
}