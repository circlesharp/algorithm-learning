#include<iostream>
using namespace std;
int tiString()
{
	// 输出一维的字符数组
	char a[] = "China";
	char b[] = { 'C', 'h', 'i', 'n', 'a' };
	cout << a; // valid 碰到 '\0' 就会终止
	// cout << b; // no good, 没遇到 '\0', 乱码


	// 输出二维字符数组
	char goodBoys[3][10] = { "Amy", "Tom", "circle" };
	for (int i = 0; i < 3; i++) cout << goodBoys[i] << endl;


	// 非字符数组输出的不是值，而是起始地址
	int test[] = { 1, 2, 3, 4 };
	cout << "test: " << test << endl;


	// 一串字符的输入
	char str[20];
	cout << "enter a sentence: " << endl;

	// 01 cin
	// while (cin >> str) cout << str << endl;

	// 02 cin.get(ch, length + 1, endCh)
	// cin.get(str, 10, 'o');
 
	// 03 cin.getline()
	// 基本用法与 cin.get 基本一致
	// cin.get 遇到终止字符是停止读取，指针不移动
	// cin.getline 遇到终止字符时结束，缓冲区指针移动到终止标记字符之后


	// 练习 读取 n 个单词
	char words[3][10];
	int n = 0;
	// 指示要输入的单词数
	cin >> n; // 缓冲区的存在，指针放在了 这个数字的后面
	cin.get(); // cin.get(n) 是不行的，因为是字符，不是 int
	for (int i = 0; i < n; i++)
		cin.getline(words[i], 10);
	for (int i = 0; i < n; i++)
		cout << words[i] << endl;

	return 0;
}
