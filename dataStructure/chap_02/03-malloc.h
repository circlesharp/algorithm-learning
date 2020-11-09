#include<stdio.h>
#include<stdlib.h>
#include<string.h>

char *_main()
{
  char *str;
  
  /* 最初的内存分配 */
  str = (char *) malloc(15);
  strcpy(str, "malloc");
  printf("string: %s, address: %x\n", str, str);

  /* 重新分配内存 */
  str = (char *) realloc(str, 25);
  strcat(str, " & realloc");
  printf("string: %s, address: %x\n", str, str);
  
  return "char_02, 03-malloc";
}
