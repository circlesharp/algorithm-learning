#include <stdio.h>

enum color { red, yellow, green };

void useEnum()
{
  enum color r = red;
  printf("r is %d\n", r);

  scanf("%d", &r);
  printf("now, r is %d\n", r);
}

int main()
{
  useEnum();

  return 0;
}