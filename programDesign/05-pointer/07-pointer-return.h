#include<iostream>
using namespace std;

void _get();
int *get(int [][4], int n, int m);

void _getInt();
int *getInt1();
int *getInt2();

void _staticInt();
void staticInt();

string _main()
{
  _get();
  _getInt();
  _staticInt();

  return "07-pointer-return";
}

void _get()
{
  int a[4][4] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16};
  int *p;
  p = get(a, 2, 3);
  cout << *p << endl;
}
int *get(int arr[][4], int n, int m) // int arr[][4] or int (*arr)[4]
{
  int *pt;
  pt = *(arr + n - 1) + m - 1;
  return pt;
}

void _getInt()
{
  int *p;
  // p = getInt1(); // invalid
  p = getInt2();
  cout << *p << ' ' << endl;
}

int *getInt1()
{
  int value = 20; // 在这个环境里面，返回局部变量的指针不合法
  return &value;
}

int *getInt2()
{
  // 静态局部变量: 值在函数调用后不会消失，而保留原值
  // 在下一次该函数调用时，仍可以继续使用该变量？
  static int value = 30;
  return &value;
}


void _staticInt()
{
  for (int i = 0; i < 5; i++)
  {
    staticInt();
    cout << "Call Again." << endl;
  }
}
void staticInt()
{
  int a = 0; // 动态局部变量， 相当于 auto int a = 0; (旧版本，新版的含义完全不同了)
  static int b = 0; // 静态局部变量
  a++; b++; // 静态局部变量，下一次调用时候还能使用，值不会消失
  cout << "a: " << a << ", b: " << b << endl;
}
