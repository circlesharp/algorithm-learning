#include<iostream>
using namespace std;
int tiString01()
{
	// 字符数组
	// char a[10] = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' };
	char a[10] = { 'a', 'b', 'c' }; // 后面的元素是 \0
	for (int i = 0; i < 10; i++)
		cout << a[i];


	// 字符串
	// 所有的字符串都是以 \0 结尾的
	// 所有以 \0 结尾的字符数组都可以认为是字符串
	char c1[] = { 'C', 'h', 'i', 'n', 'a' };
	char c2[] = "China"; // { 'C', 'h', 'i', 'n', 'a', '\0' };
	char c3[6] = "China"; // c3[5] invalid


	// 字符串赋值
	// 1. 只可以在数组定义并初始化的时候
	// 2. 不可以用赋值语句将一个 字符串常量 或 字符数组 赋值给另一个 字符数组
	char d1[] = "China";
	string str;
	char d2[6] = "Chain";
	char d3[] = { 'C', 'h', 'i', 'n', 'a', '\0' };
	str = d1; // valid
	// d2 = d1; // invalid 字符数组不可以再赋值了

	
	// 字符数组之间的赋值
	char str1[] = "C++ language", str2[20];
	int i = 0;
	while (str1[i] != '\0')
	{
		str2[i] = str1[i];
		i++;
	}
	str2[i] = '\0'; // 作为终结，应为循环无法做到
	cout << str1 << ' ' << str2 << endl;


	// 二维字符数组
	char weekday[7][11] = { "Sunday", "Monday", "Tuesday" };


	// 输入缓冲区
	// 在键盘敲了字符之后，按回车，会将字符放在 输入缓冲区
	// 输入缓冲区有一个 指针，区分那些是被读走的，那些没被读走
	// 指针的方向只能往后
	int e1, e2, e3;
	cin >> e1 >> e2 >> e3; // 对 cin 来说，空格和回车都有分割的效果
	cout << e1 << e2 << e3 << endl;

	// cin 也是有返回值的，输入无效返回 0 / false
	int grade;
	if (cin >> grade) cout << "good " << grade << endl;
	else cout << "fail";

	// 从键盘上连续输入数据
	while (cin >> grade) { }

	return 0;
}
