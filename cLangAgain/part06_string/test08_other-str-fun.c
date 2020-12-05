#include <stdio.h>
#include <string.h>

void useStrCat()
{
  char src1[10] = "Hello";
  char src2[10] = "Hello";
  char tail[] = " Tom, I am invisiable.";
  char* rst = strcat(src1, tail);
  char* rstSafe = strncat(src2, tail, 4);

  printf("src1: %s\nsrc2: %s\nrst: %s\nrstSafe: %s\n", src1, src2, rst, rstSafe);
}

void useStrChr()
{
  char s[] = "hello";
  char t = 'l';

  char* p = strchr(s, t);
  printf("The fisrt target is: %s, in %p;\n", p, p);

  p = strchr(p + 1, t);
  printf("The second target is: %s, in %p;\n", p, p);
}

void useStrStr()
{
  char s[] = "abcAbc";
  char t[] = "Abc";

  char* str = strstr(s, t);
  printf("%s\n", str);
}

int main()
{
  // useStrCat();

  // useStrChr();

  useStrStr();

  return 0;
}
