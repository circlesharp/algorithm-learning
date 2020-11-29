#include <stdio.h>
#define N 10

int main()
{
  /*
  int statisics[N];
  for(int i = 0; i < N; i++)
    statisics[i] = 0; */
  int statisics[N] = {0}; // 集成初始化，给定第一个值之后，剩下的都是0

  int input;

  scanf("%d", &input);
  while (input != -1)
  {
    if (input >= 0 && input < N)
      statisics[input] += 1;
    scanf("%d", &input);
  }
  
  for(int i = 0; i < N; i++)
    printf("index %d: %d\n", i, statisics[i]);

  return 0;
}