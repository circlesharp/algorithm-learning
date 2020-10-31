#include<iostream>
using namespace std;

struct student
{
  int id;
  char name[10];
};

void simplePointer();
void paramsPointer(student *);
void _paramsPointer();
void structArray();

string _main()
{
  simplePointer();
  _paramsPointer();
  structArray();

  return "02-struct-pointer";
}

void simplePointer()
{
  student mike = {123, "mike"};
  student *p = &mike;
  // cout << (*p).id << ' ' << (*p).name << endl;
  // 另一种写法 -> 指向运算符
  cout << p->id << ' ' << p->name << endl;
}

void _paramsPointer()
{
  student mike = {123, "mike"};
  paramsPointer(&mike);
  cout << mike.id << ' ' << mike.name << endl;
}

void paramsPointer(student *one)
{
  one->id = 1234567;
  for (int i = 0; one->name[i] != '\0'; i++)
    one->name[i] = toupper(one->name[i]);
}

void structArray()
{
  student myClass[3] = {111, "tom", 222, "amy", 333, "mike"};
  student *p = myClass;
  cout << p->name << endl;
  p++; // 指向元素指针++，则跨过了一整个结构体
  cout << p->name << endl;
}
