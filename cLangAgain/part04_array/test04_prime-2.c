#include <stdio.h>

#define number 10

int isPrime(int x, int knownPrimes[], int numberOfKnownPrimes)
{
  int ret = 1;
  for(int i = 0; i < numberOfKnownPrimes; i++) {
    if (x % knownPrimes[i] == 0) {
      ret = 0;
      break;
    }
  }
  return ret;
}

int main()
{
  int prime[number] = {2};
  int count = 1;
  int i = 3;

  /* 表头 */
  {
    printf("\t\t");
    for (int i = 0; i < number; i++)
      printf("%d\t", i);
    printf("\n");
  }

  while (count < number)
  {
    if (isPrime(i, prime, count))
      prime[count++] = i;

    /* 在函数里面平白无故加大括号，是为了调试 */
    {
      printf("i=%d \tcnt=%d\t", i, count);
      for(int i = 0; i < number; i++)
        printf("%d\t", prime[i]);
      printf("\n");
    }

    i++;
  }
  
  for (i = 0; i < number; i++) {
    printf("%d", prime[i]);
    if ((i + 1) % 5) printf("\t");
    else printf("\n");
  }

  return 0;
}