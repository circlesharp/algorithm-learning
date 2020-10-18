#include<iostream>
using namespace std;
int tiConst()
{
	// 常量：在程序中保持不变的量
	// 1. 字面常量
	// 2. 符号常量：一个标识符代表一个常量

	const double PI = 3.14159; // 符号常量的值在程序中不会再改变
	float r, area;
	cin >> r;
	area = r * r * PI;
	cout << "Area is : " << area;

	// 常量也是有类型的，可以通过后缀表示
	// 1. L long
	// 2. U unsigned
	// 3. F float


	// 匈牙利命名法
	// 1. 小写字母开头，表示数据类型
	// 2. 其后是帕斯卡，指出变量的用途
	// chGrade, nLength, bOnOff, strStudentName

	return 0;
}