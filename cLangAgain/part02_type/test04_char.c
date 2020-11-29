#include <stdio.h>

void ioChar()
{
  char c;
  scanf("%c", &c);
  printf("the value of c is: %d(int), %c(char)\n", c, c);
  if (49 == '1') printf("49=='1'");
}

char toUpper(char c)
{
  return c + 'A' - 'a';
}

char toLower(char c)
{
  return c + 'a' - 'A';
}

int main()
{
  ioChar();
  printf("%c", toUpper('d'));
  printf("%c", toLower('B'));
  return 0;
}