#include<iostream>
using namespace std;

string encryption(string str)
{
	for (int i = 0; str[i] != '\0'; i++)
	{
		if (str[i] == 'Z')
		{
			str[i] = 'A';
			continue;
		}
		if (str[i] == 'z')
		{
			str[i] = 'a';
			continue;
		}
		if (str[i] == ' ')
		{
			continue;
		}
		str[i]++;
	}
	return str;
}

void fnContinueEncryption() {
	char str[200];
	while (cin.getline(str, 200))
	{
		cout << encryption(str) << endl;
	}
}

string fnConcatStr(string a, string b)
{
	char rst[40] = { '\0' };
	int idx = 0;
	for (int i = 0; a[i] != '\0'; i++) rst[idx++] = a[i];
	for (int i = 0; b[i] != '\0'; i++) rst[idx++] = b[i];
	return rst;
}
bool fnIsLonger(string a, string b)
{
	int intLengA = 0, intLengB = 0;
	for (int i = 0; a[i] != '\0'; i++) intLengA++;
	for (int i = 0; b[i] != '\0'; i++) intLengB++;
	return intLengA > intLengB;
}
string fnConcatAfterLong(string a, string b)
{
	if (fnIsLonger(a, b)) return fnConcatStr(a, b);
	return fnConcatStr(b, a);
}


int fnCountWords()
{
	char str[80];
	int num = 0, flag = 0;
	cin.getline(str, 80);
	for (int i = 0; str[i] != '\0'; i++)
	{
		if (str[i] == ' ') flag = 0;
		else if (flag == 0)
		{
			flag = 1;
			num++;
		}
	}
	return num;
}

int _mainString()
{
	// 01 字符串加密
	// fnContinueEncryption();

	// 02 长字符串 拼 短
	// cout << fnConcatAfterLong("AAA", "b");

	// 03 统计单词数
	cout << fnCountWords();
	return 0;
}
