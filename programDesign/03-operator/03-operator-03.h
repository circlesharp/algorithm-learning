#include<iostream>
using namespace std;

void test_1();
void test_2();
void test_3();
void test_4();
void test_5();

string _main()
{
  // 1. 逗号运算符
  test_1();
  test_2();

  // 2. 条件运算符
  test_3();

  // 3. 强制类型转换运算符
  test_4();

  return "03-operator";
}

void test_1()
{
  // 1. 逗号用于连接表达式
  // 2. 从左往右，最终 整个逗号表达式 的值为最后一个小表达式的值
  // 3. 优先级是最低的

  int a, b;
  b = (a = 3 * 5, a * 4);
  cout << a << ' ' << b << endl; // 15 60
}

void test_2()
{
  int x, y, a, b;
  x = (a = 3, 6 * 3); // 18
  y = b = 3, 6 * 3; // 3
  cout << a << ' ' << b << ' ' << x << ' ' << y << endl;
}

void test_3()
{
  // 条件运算符
  // 表达式1 ? 表达式2 : 表达式3
}

void test_4()
{
  // (类型名)(表达式)
  // 把表达式的 :::值::: 强制转为类型
  // 强制类型转换之后，被转换的量并没有发生改变

  float a;
  double b;
  a = (float)(5 / 3); // 1
  // b = (double)(a);
  cout << a << ' ' << b << endl;
}
