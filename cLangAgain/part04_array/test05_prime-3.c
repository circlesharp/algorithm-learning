#include <stdio.h>
#define maxNumber 25

/* 构造素数表 */
int main()
{
  int isPrime[maxNumber];
  for (int i = 0; i < maxNumber; i++)
    isPrime[i] = 1;

  // for test
  {
    printf("\t");
    for (int i = 2; i < maxNumber; i++)
      printf("%d\t", i);
    printf("\n");
  }

  for (int x = 2; x < maxNumber; x++) {
    if (isPrime[x]) {
      for (int i = 2; i * x < maxNumber; i++)
        isPrime[i * x] = 0;
    }

    // for test
    {
      printf("%d\t", x);
      for (int i = 2; i < maxNumber; i++)
        printf("%d\t", isPrime[i]);
      printf("\n");
    }
  }

  for (int i = 2; i < maxNumber; i++) {
    if (isPrime[i])
      printf("%d\t", i);
  }
  printf("\n");

  return 0;
}