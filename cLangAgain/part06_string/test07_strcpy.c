#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void useStrcpy()
{
  char* src = "Hello";
  char* dst = (char*)malloc(strlen(src) + 1);
  char* rst = strcpy(dst, src);

  printf("src: %s, dst: %s, rst: %s;\n", src, dst, rst);
  free(dst);
}

char* myStrCpyArr(char* dst, const char* src)
{
  int idx = 0;
  while (src[idx]) {
    dst[idx] = src[idx];
    idx++;
  }
  dst[idx] = '\0';
  return dst;
}

char* myStrCpyPtr(char* dst, const char* src)
{
  char* rst = dst;

  while (*src)
    *dst++ = *src++;
  *dst = '\0';

  return rst;
}

int main()
{
  useStrcpy();

  // myStrCpyArr
  {
    char* src = "Hello";
    char* dst = (char*)malloc(strlen(src) + 1);
    char* rst = myStrCpyArr(dst, src);

    printf("src: %s, dst: %s, rst: %s;\n", src, dst, rst);
    free(dst);
  }

  // myStrCpyPtr
  {
    char* src = "Hello";
    char* dst = (char*)malloc(strlen(src) + 1);
    char* rst = myStrCpyPtr(dst, src);

    printf("src: %s, dst: %s, rst: %s;\n", src, dst, rst);
    free(dst);
  }

  return 0;
}
