#include <stdio.h>
#define ROW_SIZE 6

// 给定不超过6的正整数A，考虑从A开始连续4个数字，输出由它们组成的无重复的3位数
// 从小到大，每行6个，空格分隔（行末不能有空格）

void printPrettyNum()
{
  int a = 2;
  int cnt = 0;
  // scanf("%d", &a);
  for (int i = a; i < a + 4; i++) {
    for (int j = a; j < a + 4; j++) {
      for (int k = a; k < a + 4; k++) {
        if (i != j && i != k && j != k) {
          printf("%d%d%d", i, j, k);
          if (++cnt % ROW_SIZE == 0)
            printf("\n");
          else
            printf(" ");
        }
      }
    }
  }
}

int main()
{
  printPrettyNum();
  return 0;
}