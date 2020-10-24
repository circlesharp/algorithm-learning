#include<iostream>
#include<iomanip>
using namespace std;

void test_1();
void test_2();
void test_3();
void test_4();
void test_5();
void reverse_array();

string _main()
{
  // test_1();
  // test_2();
  // test_3();
  // test_4();
  // test_5();
  reverse_array();

  return "02-pointer";
}

void test_1()
{
  int a[5] = { 1, 2, 3, 4, 5 };
  int *p = &a[3]; // 用指针变量指向一个数组元素跟指向一个普通变量没有区别
  cout << *p << endl; // 4
  *p = 100;
  cout << a[3] << endl; // 100
}

void test_2()
{
  /*
  ::: 数组与指针 :::

  1. 数组名代表数组首元素的地址
    数组名相当于指向数组第一个元素的指针
    a[10] = {1, 2, ...}, a 相当于指向 a[0] 的指针
  2. 数组名不是变量，是地址常量，不能给它赋值
  */
  int a[5] = { 10, 11, 12, 13, 14 };
  cout << a << endl;
  cout << *a << endl;
  cout << &a[0] << endl;
  cout << a[0] << endl;
}

void test_3()
{
  // 1. p = a => p = &a[0]
  // 2. p + i => a + i => &a[i]
  // 3. *(p + i) => *(a + i) => a[i]
  // 4. p[i] => *(p + i)
  int a[5] = { 10, 11, 12, 13, 14 };
  int *p = NULL;
  cout << a << endl; // 0x...
  p = a; // 相当于 p = &a[0]
  cout << p << endl; // 0x...
  cout << *p << endl; // 10
  cout << *p++ << endl; // 10
  cout << *p++ << endl; // 11
  cout << *++p << endl; // 13
}

void test_4()
{
  int a[5];
  for (int i = 0; i < 5; i++) cin >> a[i];
  for (int i = 4; i >= 0; i--) cout << setw(3) << a[i];
}

void test_5()
{
  /*
  ::: attention :::
  1. a++ 是没有意义的，p++ 会引起p变化
  2. p 可以指向数组最后一个元素以后的元素
  3. so, 在指针做加减运算时一定注意有效的范围（很危险）
  */
  int a[5], *p = a;
  for (int i = 0; i < 5; i++) cin >> *p++;
  for (p--; p>=a;) cout << setw(3) << *p--;
}

void reverse_array()
{
  // 1. 假若不满10个元素，仍按照 \0 处理
  // 2. 如果直接打印字符串的 '\0', 没啥效果，但是转为 int 后，就是0
  int a[10] = {1, 2, 3, 4, 5, 6, 7, 8 };
  // int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0 };
  int *p = NULL, *q = NULL, temp;
  for (p = a, q = a + 9; p < q; p++, q--)
  {
    temp = *p; *p = *q; *q = temp;
  }
  for (p = a; p < a + 10; p++) cout << setw(3) << *p;
}
