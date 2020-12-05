#include <stdio.h>

/* 输入过程中，没有按 enter，字符都在缓冲区(shell的缓存区) */
/* input: ab c => output: --a--b-- --c-- */
/* 而且 enter 也被都进去了 */
void putNGet()
{
  int ch;

  /* EOF ctrl+D */
  while ((ch = getchar()) != EOF) {
    printf("--");
    putchar(ch);
  }

  printf("EOF\n");
}

int main()
{
  putNGet();

  return 0;
}