#include<iostream>
using namespace std;

void test_1();
void test_2();
void test_3();
void test_4();
void test_5();
void test_6();
void test_7();
void test_8();

string _main()
{
  // 位运算：对字节里每一个二进制位进行的运算
  // 虽说是“位”，但还是以字节位单位的

  // 1. 按位与 &
  test_1();

  // 2. 按位或 |
  test_2();

  // 3. 按位异或 ^ XOR
  test_3();

  // 4. 取反运算 ~
  test_4();

  // 5. 左移运算
  test_5();

  // 6. 右移运算
  test_6();

  // 7. 位运算的应用例子
  test_7();

  // 8. 不借助中间变量交互两个数
  test_8();

  return "04-operator";
}

void test_1()
{
  // 与运算 / 按位与
  int a = 3 & 5;
  cout << "0011 & 0101 => 0001 " << a << endl;
}

void test_2()
{
  int a = 3 | 5;
  cout << "0011 | 0101 => 0111 " << a << endl;
}

void test_3()
{
  int a = 3 ^ 5;
  // 说法1：一样为0，相异为1
  // 说法2：碰到1就变
  // 按位异或实现了反转
  cout << "0011 ^ 0101 => 0110 " << a << endl;
}

void test_4()
{
  int a = 025; // 八进制的
  int b = ~a;
  int c = b + 1; // 补码就是原码的反码再加一
  cout << oct << a << ' ' << b << ' ' << c << endl;
  cout << dec << a << ' ' << b << ' ' << c << endl;
}

void test_5()
{
  // 左移1位相当于乘二
  // 前提是不溢出
  int a = 15;
  int b = a << 2;
  cout << "00001111 << 2 = 00111100 = 15 * 2 ** 2 = 60 " << b << endl;
}

void test_6()
{
  // 如果溢出（最后一个是1，基数）
  // 就相当 / 2
  // 整数的运算还是整数，是没有小数位的
  // 符号位因不同系统会不一样：逻辑右移 算术右移
  int a = 15;
  int b = a >> 2;
  int c = (a / 2) / 2;
  cout << b << ' ' << c << endl;
}

void test_7()
{
  // 按位与 => 取一个数中某些指定的位
  int a = 0x2cac;
  int b = 0x00ff;
  int c = a & b;
  cout << "取低8位：0x2cac & 0x00ff => 0x00ac(172) " << c << endl;

  // 按位或 => 某些位取定值为1
  int d = a | b;
  cout << "低8位变成1：0x2cac | 0x00ff => 0x2cff(11519) " << d << endl;

  // 按位异或 => 某些位反转 / 不变
  int e = a ^ b;
  cout << "低8位反转：0x2cac ^ 0x00ff => 0x2c53(11347) " << e << endl;
}

void test_8()
{
  int a = 3, b = 4;
  a = a ^ b;
  b = b ^ a;
  a = a ^ b;
  cout << a << ' ' << b << endl;
}
