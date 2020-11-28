#include <stdio.h>
#include <math.h>

int prime(int num)
{
  if (num <= 3) return 0;

  for (int i = 2; i <= sqrt(num); i++) {
    if (num % i == 0) return 0;
  }
  return 1;
}

void test(n)
{
  for (int i = 0; i < n; i++)
    printf("the result of %d is %d.\n", i, prime(i));
}

int main()
{
  int m = 1, n = 500;
  int cnt = 0, sum = 0;
  scanf("%d %d", &m, &n);
  for (int i = m; i <= n; i++) {
    if (prime(i)) {
      cnt++;
      sum += i;
    }
  }
  printf("%d %d", cnt, sum);
  return 0;
}