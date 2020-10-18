#include<iostream>
using namespace std;
int tiString02()
{
	char c; // 为啥 char 都可以存储字符串呢？
	cout << "enter a sentence: " << endl;

	// 直接用 cin 输入字符
	// cin 会跳过空格，跳过回车
	// 用 ^Z 终止输入
	// while (cin >> c) cout << c;


	// cin.get()
	// 有点像 Python 的 input 了
	// 不忽略空格与回车，它们都是字符（与 cin 最大的区别）
	// EOF 文件结束符
	// while ((c = cin.get()) != EOF) cout << c;
		
	// cin.get(char)
	// while (cin.get(c)) cout << c;


	// getchar()
	// 不跳过任何字符
	// while (c = getchar()) cout << c;

	return 0;
}