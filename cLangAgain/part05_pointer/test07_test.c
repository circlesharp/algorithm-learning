#include <stdio.h>
#include <stdlib.h>

/*
D. 这段代码是合法的，所以可以编译。
C. 肯定是无法永远运行下去啦。
A. 这确实是引起程序终止的原因，但不是直接原因。

而malloc在分配内存失败时并不会终止程序，而是返回NULL指针。
试图向NULL指针位置写入数据，这会引起程序终止。
*/

int main()
{
  char* p;
  while (1)
  {
    p = malloc(1);
    *p = 0;
  }
  
  return 0;
}