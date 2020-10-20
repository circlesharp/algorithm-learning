#include<iostream>
using namespace std;

void test_1();
void test_2();
void test_3();
void test_4();
void test_5();

string _main()
{
  // 1. 基本的算术运算符
  test_1();

  // 2. 自增自减运算符
  test_2();

  // 3. 关系运算符
  test_3();

  // 4. 逻辑运算符
  test_4();
  test_5();

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

void test_4()
{
  /* ! -> && -> || */
  cout << (0 || 1 && !0) << endl; // 优先级

  /* ! -> 算术 -> 关系 -> && -> || -> 赋值 */
  int a, b = 0;
  a = 5 > 3 && 2 || 8 < 4 - (b = !0); // (5 > 3 && 2) || (8 < 4 - (b = !0)) 后面的短路了
  cout << a << ' ' << b << endl; // 1 0

  /*
  ::: 逻辑运算符的取舍 :::
  只有必须执行下一个逻辑运算符才能求出表达式的值时，才执行该运算符
  */
  int i, c;
  i = 0;
  a = 1;
  b = 2;
  c = 3;

  i = ++a || ++b || c++;
  cout << i << ' ' << a << ' ' << b << ' ' << c << endl; // 1 2 2 3
}

void test_5()
{
  int a = 0, b = 1;
  a = 8 > 4 - (b = !'c') && 5 > 3 + 'a' % 6 == 'b';
  cout << a << ' ' << b << endl; // 0 0
}
