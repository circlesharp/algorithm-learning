#include <stdio.h>
#include "./test08_header.h"

int publicNum = 123;
static int staticNum = 321;

double getMax(double a, double b)
{
  return b > a ? b : a;
}

char* getStr()
{
  return "Hello, world!";
}

static int getStaticInt()
{
  return 233;
}
