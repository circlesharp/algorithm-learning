#include<iostream>
using namespace std;

void test_1();
void test_2();
void test_3();

string _main()
{
  // 1. 基本的算术运算符
  test_1();

  // 2. 自增自减运算符
  test_2();

  // 3. 关系运算符
  test_3();

  return "02-operator";
}

void test_1()
{
  cout << 7 % 4 << endl; // 模运算必须整数
  cout << 5 / 3 << endl; // 整数运算，结果仍然是整数 => 1
  cout << 5.3 / 3 << ' ' << 5 / 3.0 << endl; // 实数运算，结果为 double, 舍入方向随编译器改变

  /* ::: 算术运算符的优先级 :::
  | double - float
  |
  | long
  |
  | unsigned
  |
  | int - (char, short)
  */
}

void test_2()
{
  // ++i 使用 i 之前，先自增
  // i++ 使用 i 之后，再自增
  // 只能用于变量，不能用于表达式

  int i = 3;
  
  // 1. 后++ 比 - 优先，先用后加
  cout << -i++ << endl;

  // 2. 前++ 和 - 平级，先算后面的
  cout << -++i << endl;

  // 3. wrong: ++ 只能用于变量，不能用于表达式
  // cout << (-i)++ << endl;

  // 4. wrong: ++(i++) 不能用于表达式
  // cout << ++i++ << endl;
}

void test_3()
{
  // 算术运算符 高于 关系运算符 高于 赋值运算符
  cout << (1 > 2 == 3 > 4) << endl; // 1
}
