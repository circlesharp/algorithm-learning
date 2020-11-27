#include <stdio.h>
#define BASE 60

int main()
{
  int hour1, minute1, hour2, minute2;

  scanf("%d %d", &hour1, &minute1);
  scanf("%d %d", &hour2, &minute2);

  int t1 = hour1 * BASE + minute1;
  int t2 = hour2 * BASE + minute2;

  int t = t2 - t1;

  printf("时间差为%d小时%d分钟。", t / BASE, t % BASE);

  return 0;
}