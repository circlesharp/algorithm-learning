#include <stdio.h>

int main()
{
  for (int row = 1; row <= 9; row++) {
    for (int col = 1; col <= row; col++) {
      int rst = col * row;
      printf("%d*%d=%d", col, row, rst);
      if (col < row) {
        if (rst < 10) printf("  ");
        else printf(" ");
      }
    }
    printf("\n");
  }
  return 0;
}