#include<iostream>
using namespace std;

void test_1();
void test_2();
void test_3();
void test_4();
void test_5();

string _main()
{
  // test_1();
  // test_2();
  // test_3();
  // test_4();
  test_5();

  return "01-pointer";
}

void test_1()
{
  /* 
  ::: 变量三要素 :::

  1. 变量的地址 => 指向该变量的指针
  2. 变量的值
  3. 变量的名字
  */

 /* & 取地址运算符 */
 int c = 1;
 cout << &c << " sizeof: " << sizeof(&c) << endl; // ps: 4 bytes == 32 bit; 32 bit 最多 2**32 byte == 4 gb

 /* * 指针运算符 */
 cout << *&c << " *&c == c " << c << endl;

 /* 指针变量：专门用于存放指针（某个变量的地址）的变量 */
 int *pointer; // int => 指针变量的基类型； * => pointer的类型
 pointer = &c; // pointer 就是指向变量c的指针变量；或者说，指针变量 pointer 指向了变量c
 cout << pointer << " 用 *pointer 提取变量（*pointer 当作变量使用） " << *pointer << endl;
}

void test_2()
{
  int iCount = 18;
  int * iPtr = &iCount;
  *iPtr = 58;
  cout << iCount << endl; // 58
  cout << iPtr << endl; // 0x1...
  cout << &iCount << endl; // 0x1...
  cout << *iPtr << endl; // 58
  cout << &iPtr << endl; // 0x2...
}

void test_3()
{
  int a = 0, b = 0, temp;
  int * p1 = NULL, * p2 = NULL; // NULL 空指针
  cin >> a >> b;
  p1 = &a;
  p2 = &b;
  if (*p1 < *p2)
  {
    temp = *p1;
    *p1 = *p2;
    *p2 = temp;
  }
  cout << "max = " << *p1 << ", min = " << *p2 << endl;
}

void test_4()
{
  int a, b;
  int *p1 = NULL, *p2 = NULL, *temp = NULL;
  cin >> a >> b;
  p1 = &a;
  p2 = &b;
  if (*p1 < *p2)
  {
    temp = p1;
    p1 = p2;
    p2 = temp;
  }
  cout << "Max = " << *p1 << ", Min = " << *p2 << endl;
}

void test_5()
{
  int n = 0;
  int *p = &n;
  cout << p << endl;
  p++; // ++ 体现了基类型的作用
  cout << p << " sizeof int: " << sizeof(n) << endl;
}
