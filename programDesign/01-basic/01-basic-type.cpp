#include<iostream>
using namespace std;
int tiBasicType()
{
	// 基本数据类型
	// int, float, char, bool

	// 整型
	short a = 1; // 32 bit
	long b = 2; // 16 bit
	int c = 3; // 32 bit, ps C 的标准只要求 long 不短与 int, short 不长于 int
	unsigned int d = -4; // invalid, 无符号
	cout << sizeof(short) << sizeof(long) << sizeof(int) << endl; // 查看编译环境里对象在内存中所占的字节数（byte）

	// 进制
	cout << hex << -123 << endl; // 看十六进制，推算二进制
	cout << oct << -123 << endl;
	cout << dec << -123 << endl;
	int e = 0xFFFFFF85; // 0x hex, 0 oct
	cout << e << endl;

	// 最值
	unsigned int f = 0xFFFFFFFF; // 42亿 4 billions
	cout << f << endl;
	signed int g = 0x7FFFFFFF; // 2 billions
	int h = g + 1; // 有符号的数所能表示的最小的数，当最高位是1其他位是0，最高位的1既是符号，也是整数最高位
	cout << h << endl;



	// 浮点型/实型
	float i = 3.1515926; // 32 bit，有效 7 byte
	double j = 2; // 64 bit，有效 15 byte
	long double k = 3; // 64 bit，有效 15 byte

	// sign(1 bit) + exponent(8 bits) + fraction(23 bits)
	// -314.16 => - 3.1416e2
	// IEEE 754 浮点数的计算标准
	// 避免将一个很大的数与一个很小的数直接相加，否则会丢失很小的数（精度7位）

	// cout 的默认打印精度 6
	cout << i << endl;



	// 字符型
	// 一个字符占 1 byte, 所以这个字符集（ASCII）最多表示 256 个字符
	// 字符型与整型的存储是相同的：可以与整型相互赋值，可以和整型一样运算
	char ca = 64; // '@'
	int cb = 'Z'; // 90
	int cc = b - a;
	char cd = 6 + 256; // 超过，截取 8 bit, 6
	cout << ca << " " << cb << " " << cc << " " << cd << endl;

	// 转义字符
	cout << "This is a line. \n";
	// cout << '\a' << '\\' << '\n';



	// 布尔型 占 1 byte (字节是计算机程序所能控制的最小存储单位)
	bool da = true;
	bool db = false;
	bool dc = 7 > 3;
	bool dd = -1; // 非0即1
	cout << da << db << dc << dd << endl;

	return 0;					
}
