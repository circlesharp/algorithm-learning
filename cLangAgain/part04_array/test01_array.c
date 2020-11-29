#include <stdio.h>

int main()
{
  int x = 0, cnt = 0;
  int number[100];
  int sum = 0;

  for (; cnt < 100; cnt++)
  {
    scanf("%d", &x);
    if (x == -1) break;
    number[cnt] = x;
    sum += x;
  }

  double average = (double)sum / cnt;
  printf("The average is %.2f\n", average);

  return 0;
}