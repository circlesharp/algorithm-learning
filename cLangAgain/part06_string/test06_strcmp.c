#include <stdio.h>
#include <string.h>

void useStrcmp()
{
  char s1[] = "abc";
  char s2[] = "abc";
  printf("%d\n", strcmp(s1, s2));
}

int myStrCmp(const char* s1, const char* s2)
{
  int idx = 0;
  while (s1[idx] == s2[idx] && s1[idx] != '\0')
    idx++;

  return s1[idx] - s2[idx];
}

int myStrCmp2(const char* s1, const char* s2)
{
  while (*s1 == *s2 && *s1 != '\0') {
    s1++;
    s2++;
  }
  
  return *s1 - *s2;
}

int main()
{
  useStrcmp();

  printf("myStrCmp(\"abc\", \"abc \"): %d\n", myStrCmp("abc", "abc "));
  printf("myStrCmp2(\"abc\", \"abc \"): %d\n", myStrCmp2("abc", "abc "));
  
  return 0;
}