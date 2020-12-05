#include <stdio.h>

void _()
{
  /* char**a: a 是一个指针，指向另一个指针，那个指针指向一个字符（字符串） */

  /* char[][]: 错误 */
  /* char[][n]: 每个字符串的长度不能超过 n-1 */

  /* char* a[]: a[0] -> char* */
  /* a是数组，每个元素是一个指针 */
}

void doubleStar()
{
  char s = 'c';
  char* sPtr = &s;
  char**a = &sPtr;

  printf("s: %c, sPtr: %p, a: %p, *a: %p, **a: %c;\n", s, sPtr, a, *a, **a);
}

void stringArray()
{
  char* a[] = { "abc", "hello" };
  int len = sizeof(a) / sizeof(a[0]);
  for (int i = 0; i < len; i++)
    printf("--%s\n", a[i]);
}

int main(int argc, char const * argv[])
{
  for (int i = 0; i < argc; i++)
    printf("%d: %s\n", i, argv[i]);

  stringArray();
  doubleStar();
  return 0;
}
