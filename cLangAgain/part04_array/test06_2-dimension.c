#include <stdio.h>

void initArray()
{
  /* 列数必须给出 */
  int a[][5] = {
    {1, 2, 3, 4, 5},
    {2, 2, 3, 4, 5},
  };

  int b[][2] = { 1, 2, 3, 4 };
}

int main()
{
  initArray();
  
  return 0;
}
