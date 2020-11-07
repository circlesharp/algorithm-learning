#include<stdio.h>
#include<math.h>
#include<time.h>

const int MAXN = 10;
const long MAXK = 1e7;


/**
 * 计算阶数为n, 系数为 a[0] ... a[n] 的多项式在 x 点的值
 */
double method_1(int n, double a[], double x)
{
  double p = a[0];
  for (int i = 1; i <= n; i++) // 因为 p 的初值就是 a0，所以循环不必考虑数组的第0项
    p += a[i] * pow(x, i);
  return p;
}

/**
 * 秦九韶算法
 */
double method_2(int n, double a[], double x)
{
  double p = a[n];
  for (int i = n; i > 0; i--)
    p = a[i - 1] + x * p;
  return p;
}

/**
 * 用于测试被测函数 (*f) 的运行时间
 */
void run(double(*f)(int, double*, double), double a[], int case_n)
{
  clock_t start, stop;
  double duration;

  start = clock();
  for (int i = 0; i < MAXK; i++)
    (*f)(MAXN - 1, a, 1.1);
  stop = clock();

  duration = ((double)(stop - start)) / CLK_TCK;
  printf("ticks %d = %f \n", case_n, (double)(stop - start));
  printf("duration %d = %6.2e \n", case_n, duration); // %6.2e 6个字符，2位小数，科学计数法
}


char *_main()
{
  double a[MAXN];
  for (int i = 0; i < MAXN; i++)
    a[i] = (double)i;
  run(method_1, a, 1);
  run(method_2, a, 2);
  return "char_01, 02-Sum_Polynome";
}

