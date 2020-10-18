#include <iostream>
using namespace std;

void change(int a, int b)
{
	// 对外部的变量没影响
	a = 30;
	b = 50;
}

void changeArr(int a[])
{
	// 数组元素的值会改变
	// 数组的名字不是变量，而是常量，是内存中的地址
	// 传递地址是非常严重的事情，金币埋在地下的比喻
	a[0] = 30;
	a[1] = 50;
}

int _mainFunction03()
{
	int a[2] = { 3, 5 };
	// change(a[0], a[1]);
	changeArr(a);
	cout << a[0] << ' ' << a[1] << endl;
	cout << a;
	return 0;
}
