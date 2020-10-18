#include<iostream>
using namespace std;

void test_1();
void test_2();
void test_3();
void test_4();
void test_5();
void test_6();
void test_7();

string _main()
{
  /* ::: 赋值运算符 ::: */

  // 1. 若两边类型不一样，会进行类型转换
  test_1();

  // 2. 长数赋给短数，截取长数的 低n位 送给短数(拦腰砍下)
  test_2();
  test_3();

  // 3. 短数赋给长数，原来是啥，现在还是啥(如果有符号，高位全补0 / 1)
  test_4();
  test_5();

  // 4. 符号位的赋值处理，直接赋值，不管符号位还是数字位
  test_6();
  test_7();

  return "01-operator";
}

void test_1()
{
  int int_i = 564.123;
  char char_i = int_i;
  float float_i = char_i;
  bool bool_i = float_i;
  cout << showpoint << int_i << ' ' << char_i << ' '
    << float_i << ' ' << bool_i << endl;
}

void test_2()
{
  char char_a = ' ';
  int int_i = 0x361; // 00...0011 0110 0001
  cout << hex << int_i << endl;
  char_a = int_i; // 0110 0001 => 97 => a
  cout << char_a << endl;
}

void test_3()
{
  long int long_i = 0x2AAAAAAA; // long 32 bit
  cout << long_i << endl;
  short short_j = long_i; // short 16 bit
  unsigned short unsigned_hort_j = long_i;
  cout << hex << short_j << ' ' << unsigned_hort_j << endl;
  cout << dec << short_j << ' ' << unsigned_hort_j << endl;
}

void test_4()
{
  short int a = -1;
  int b = a;
  cout << b << endl;
}

void test_5()
{
  short short_i = -123; // ff85
  cout << hex << short_i << endl;
  int int_j = short_i; // ffff ff85 => -123
  cout << hex << int_j << endl;
  cout << dec << int_j << endl;
}

void test_6()
{
  unsigned int unsigned_int_i = 0xaaaaaaaa;
  cout << unsigned_int_i << endl;
  signed int signed_int_j = unsigned_int_i;
  cout << hex << signed_int_j << endl;
  cout << dec << signed_int_j << endl;
}

void test_7()
{
  unsigned int unsigned_int_i = 0x80000000;
  cout << unsigned_int_i << endl;
  signed int signed_int_j = unsigned_int_i;
  cout << hex << signed_int_j << endl;
  cout << dec << signed_int_j << endl;
}
