#include<iostream>
using namespace std;

void test_1();
void test_2();
void test_3();
void myStrCopy(char *, const char *);

string _main()
{
  // 1. 指向符号常量的指针
  test_1();
  test_2();
  test_3();

  return "限制指针实参功能: 指向符号常量的指针 => const int *p;";
}

void test_1()
{
  int a = 256;
  const int *p = &a; // 指向符号常量的指针, *p 不允许修改
  // *p = 257; // wrong
}

void test_2()
{
  char a[20] = "HelloWorld";
  char b[20];
  myStrCopy(b, a);
  cout << a << ' ' << b << endl;
}

void myStrCopy(char *dest, const char *src)
{
  for (; *src != '\0'; src++)
    *dest++ = *src;
}

void test_3()
{
  // 指向符号常量的指针
  // 不能修改 *p, 能修改 p
  const int a = 78;
  const int b = 28;
  int c = 18;
  const int *p = &a;
  // *p = 58; // invalid
  p = &b; // 允许
  cout << "&a: " << &a << ", &b: " << &b << endl;
  cout << "p: " << p << ", *p: " << *p << endl;
}
