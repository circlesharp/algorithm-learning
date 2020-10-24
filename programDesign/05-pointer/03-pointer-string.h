#include<iostream>
using namespace std;

void test_1();
void copy_string();
void point_string();
void string_assign();

string _main()
{
  // test_1();
  // copy_string();
  // point_string();
  string_assign();

  return "03-pointer-string";
}

void test_1()
{
  // 指向数组的指针
  int a[10];
  int *p = a; // p 就是指向数组 a 的指针

  // 指向字符串的指针
  char b[10];
  char *q = b; // q 就是指向字符串 b 的指针
}

void copy_string()
{
  char a[] = "How are you?", b[20];
  char *p1, *p2;
  for (p1 = a, p2 = b; *p1 != '\0'; p1++, p2++)
    *p2 = *p1;
  *p2 = '\0';
  cout << "string a is: " << a << endl;
  cout << "string b is: " << b << endl;
}

void point_string()
{
  // cout 是对字符串做了处理的，会输出字符串，而不是地址本身
  char c[] = {'H', 'e', 'l', 'l', '0'};
  char *pc = c;
  cout << "c: " << c << "\npc: " << pc << "\n*pc: " << *pc << endl;
  cout << static_cast<void*>(c) << endl; // 暂不解释，打印字符串地址
}

void string_assign()
{
  // 字符串不允许在除定义外赋值（因为是个常量）
  // 但是指针可以
  char buffer[10] = "ABC";
  // buffer = "AAA"; // wrong!
  char *pc;
  pc = "hello"; // correct!
  cout << pc << endl;
  pc++;
  cout << "pc: " << pc << ", *pc: " << *pc << endl;
  pc = buffer;
  cout << pc << endl;
}
