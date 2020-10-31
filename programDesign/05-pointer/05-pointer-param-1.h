#include<iostream>
using namespace std;

void test_1();
char* test_2();
void test_3();
void test_4();
void test_5();
void Rank(int*, int*);
void sum(int*, int);
int maxvalue(int (*)[4]);
int sum2(int [], int n);

// char* _main()
string _main()
{
  // 1. 指针作为函数的参数
  test_1();
  test_3();

  // 2. 指针作为返回值
  /*
    or:

    char *strPointer = test_2();
    cout << strPointer << endl;
  */
  cout << test_2() << endl;

  // 3. 多维数组作为参数
  test_4();

  // 4. 数组名作为参数
  test_5();

  return "05-pointer-param";
}

void test_1()
{
  int a=3, b=5, *p1, *p2;
  p1 = &a; p2 = &b;
  Rank(p1, p2);
  cout << a << ' ' << b << endl;
}

char *test_2()
{
  return "指针作为返回值";
}

void test_3()
{
  int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  sum(a, 10);
}

void sum(int *p, int n)
{
  int total = 0;
  for (int i = 0; i < n; i++)
    total += *p++;
  cout << total << endl;
}

void Rank(int *q1, int *q2)
{
  int temp;
  if (*q1 < *q2)
  {
    temp = *q1;
    *q1 = *q2;
    *q2 = temp;
  }
}

void test_4()
{
  int a[3][4] = {1,2,3,4,5,6,7,8,9,10,11,12};
  cout << "The Max Value is: " << maxvalue(a) << endl;
}

int maxvalue(int (*p)[4])
{
  int max = p[0][0];
  for (int i=0; i<3; i++)
  {
    for (int j=0; j<4; j++)
      if (p[i][j] > max) max = p[i][j];
  }
  return max;
}

void test_5()
{
  int a[10] = {1,2,3,4,5,6,7,8,9,10};
  cout << sum2(a, 10) << endl;
}

// c++ 编译器将 形参数组名 作为 指针变量 处理
int sum2(int arr[], int n)
{
  for (int i = 0; i < 10 - 1; i++)
  {
    // 危险的操作
    *(arr + 1) = *arr + *(arr + 1);
    arr++;
  }
  return *arr;
}
