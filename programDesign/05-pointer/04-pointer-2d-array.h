#include<iostream>
using namespace std;

void array_1d();

string _main()
{
  array_1d();
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
