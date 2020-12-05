#include <stdio.h>
#include <string.h>

void useStrlen()
{
  char line[] = "Hello";
  char* str = "Hello";

  printf("strlen(\"Hello\"): %u\n", strlen("Hello"));
  printf("strlen(line): %u\n", strlen(line));
  printf("strlen(str): %u\n", strlen(str));
  printf("sizeof(line): %u\n", sizeof(line));
}

size_t myStrLen(const char* str)
{
  int cnt = 0;

  /* 方法1 */
  {
    // int idx = 0;
    // while (str[idx] != '\0') {
    //   idx++;
    //   cnt++;
    // }
  }

  /* 方法2 */
  {
    while (*str != '\0')
    {
      cnt++;
      str++;
    }
  }
  
  printf("%d", cnt);
  return cnt;
}

int main()
{
  // useStrlen();

  myStrLen("hello");

  return 0;
}