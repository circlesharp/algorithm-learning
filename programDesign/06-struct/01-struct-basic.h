#include<iostream>
using namespace std;

struct worker
{
  int id;
  char name[10];
};

void createStruct();
void structMike();
void copyStruct();
void paramsStruct(worker);
void _paramsStruct();
worker returnStruct();
void _returnStruct();

string _main()
{
  structMike();
  copyStruct();

  // 结构体作为函数的参数，copy
  _paramsStruct();

  // 结构体作为函数的返回值，copy
  _returnStruct();

  return "01-struct";
}

void createStruct()
{
  /*
  ::: 结构体 :::
  1. student 不是一个变量，而是一种数据类型，就像 int、 float...
  2. 是 组合数据类型
  3. 用于定义变量
  */
  struct student
  {
    int id;
    char name[20];
    char sex;
    int age;
    float score;
    char addr[30];
  };
  
  /* 定义结构体变量: 方法一 */
  student student1, student2;

  /* 定义结构体变量: 方法二 */
  struct _student
  {
    /* data */
  } _student1, _student2;
  
}

void structMike()
{
  struct student
  {
    int id_num;
    char name[10];
  };

  student mike = {234, "mike"};

  mike.id_num = 20130000 + mike.id_num;

  for (int i = 0; mike.name[i] != '\0'; i++)
    mike.name[i] = toupper(mike.name[i]);

  cout << mike.id_num << ' ' << mike.name << endl;
}

void copyStruct() {
  struct student
  {
    int id_num;
    char name[10];
  };
  student mike1 = {234, "mike"};
  student mike2 = mike1; // 相当于copy了一份，是副本
  mike2.id_num = 3434;
  for (int i = 0; mike2.name[i] != '\0'; i++)
    mike2.name[i] = toupper(mike1.name[i]);
  cout << mike1.id_num << ' ' << mike1.name << endl;
  cout << mike2.id_num << ' ' << mike2.name << endl;
}

void _paramsStruct()
{
  worker tom = {234, "Tom"};
  paramsStruct(tom);
  cout << tom.id << ' ' << tom.name << endl;
}

void paramsStruct(worker one)
{
  one.id += 2013000;
  for (int i = 0; one.name[i] != '\0'; i++)
    one.name[i] = toupper(one.name[i]);
  cout << one.id << ' ' << one.name << endl;
}

void _returnStruct()
{
  worker tom = returnStruct();
  cout << tom.id << endl;
}

worker returnStruct()
{
  worker tom = {111, "Tom"}; // 局部变量，但返回的是副本，所以没关系
  return tom;
}
