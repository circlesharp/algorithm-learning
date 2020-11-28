#include <stdio.h>
#define INTEREST 0.08

double calFinalValue(double capital, int year)
{
  if (year == 0) return capital;
  year -= 1;
  return calFinalValue(capital * (INTEREST + 1), year);
}

int main()
{
  double capital;
  int year;

  printf("Please input the capital and years\n");
  scanf("%lf %d", &capital, &year);

  double final = calFinalValue(capital, year);

  printf("The final value of %.2f in %d years is: %.2f\n", capital, year, final);

  return 0;
}