#include<iostream>
#include<iomanip>
using namespace std;

void array_1d();
void array_2d_pointer_1();
void array_2d_pointer_2();
void array_2d_pointer_3();
void array_2d_pointer_4();

string _main()
{
  // array_1d();
  array_2d_pointer_4();
  return "04-pointer-2d-array";
}

void array_1d()
{
  // &p 管辖范围升级
  // *p 管辖范围降级
  
  int a[4] = {1, 3, 5, 7};
  cout << a << endl; // 0x1..
  cout << a + 1 << endl; // 0x1..+4
  cout << &a << endl; // 0x1.. 是指向整个数组的指针，不是第一个元素的指针了 &a让a的管辖范围上升一级
  cout << &a + 1 << endl; // 0x1..+(4*4)
  cout << *(&a) << endl; // 0x1..  caz, *(&p) => p *让管辖范围下降一个等级
  cout << *(&a) + 1 << endl; // 0x1..+4

  cout << "*a: " << *a << ", a: " << a << ", &a: " << &a << endl;
  cout << "sizeof(a[0]): " << sizeof(a[0]) << ", sizeof(a): " << sizeof(a) << ", sizeof(&a): " << sizeof(&a) << endl;
}

void array_2d_pointer_1()
{
  /*
  ::: 二维数组的数组名指针 :::

  1. 数组名相当于指向数组第一个元素的指针
  2. &E 相当于把 E 的管辖范围上升一个级别
  3. *E 相当于把 E 的管辖范围下降一个级别
  */

 int a[3][4] = {
   {1, 2, 3, 4},
   {5, 6, 7, 8},
   {9, 10, 11, 12},
 };
 
  cout << "a = " << a << endl;
  cout << "&a[0] = " << &a[0] << endl;
  cout << "a + 1 = " << a + 1 << endl;
  cout << "&a[0] + 1 = " << &a[0] + 1 << endl;

  cout << "*a = " << *a << endl;
  cout << "a[0] = " << a[0] << endl;
  cout << "&a[0][0] = " << &a[0][0] << endl;
  cout << "*a + 1 = " << *a + 1 << endl;
  cout << "a[0] + 1 = " << a[0] + 1 << endl;
  cout << "&a[0][0] + 1 = " << &a[0][0] + 1 << endl;
}

void array_2d_pointer_2()
{
  int a[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12},
  };

  cout << "a = " << a << endl;
  cout << "&a[0] = " << &a[0] << endl;
  cout << "a + 1 = " << a + 1 << endl;
  cout << "&a[0] + 1 = " << &a[0] + 1 << endl << endl;

  cout << "a[1] = " << a[1] << endl;
  cout << "&a[1] = " << &a[1] << endl;
  cout << "*(a + 1) = " << *(a + 1) << endl;
  cout << "*a + 1 = " << *a + 1 << endl;
  cout << "&a = " << &a << endl;
  cout << "&a + 1 = " << &a + 1 << endl;
}

void array_2d_pointer_3()
{
  int a[3][4] = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23};
  int *p;
  for (p = &a[0][0]; p < &a[0][0] + 12; p++) // 二维数组的存储也是“一字排开”
    cout << p << ' ' << *p << endl; // 使用指针范围二维数组的元素
}

void array_2d_pointer_4()
{
  int a[3][4] = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23};
  int (*p)[4], i, j; // int (*p)[4]
  p = a;
  cin >> i >> j;
  cout << setw(4) << p[i][j]; // 可以直接用这种语法
  // cout << setw(4) << *(*(p + i) + j);
}
