#include <iostream>
#include "09-function-02.h"
using namespace std;
int a = 0, b = 0;

// 函数定义在 main 后面的，要先在前面声明
// 函数的原型（又 Signature, 签名, 基调） = 返回值类型 + 函数名 + 参数类型（参数表）
float min(float, float);

int _mainFunction()
{
	cout << max(3.0, 3.1) << endl;

	// 保存当前现场 => 恢复现场，从断点处继续执行
	// 调用完毕后内存空间已经不存在
	// 实参 copy 过去了（即 值传递。无论怎么处理复印稿，对原稿无影响）
	cout << min(3, 4) << endl;
	return 0;
}

float min(float a, float b)
{
	// 当全局变量与局部变量同名时
	// 局部变量将在自己作用域内有效
	// 它将屏蔽同名的全局变量
	if (a < b) return a;
	return b;
}
