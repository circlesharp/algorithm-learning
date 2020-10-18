#include<iostream>
using namespace std;
int main()
{
	// 浮点型 实型
	float a = 3.1515926; // 32 bit，有效 7 byte
	double b = 2; // 64 bit，有效 15 byte
	long double c = 3; // 64 bit，有效 15 byte

	// cout 的默认打印精度 6
	cout << a << endl;
	// cout << setprecision(7) << a << endl;

	return 0;
}
