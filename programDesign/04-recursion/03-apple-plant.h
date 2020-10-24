#include<iostream>
using namespace std;

/*
::: 利用递归进行 自动分析 :::

1. 先假设有一个函数能给出答案；
2. 在利用这个函数的前提下，分析如何（一步步）解决问题；
3. 搞清楚最简单的情况下答案是什么。
*/

int f(int, int);

string _main()
{
  cout << f(100, 100) << endl;
  return "apple & plant";
}

int f(int m, int n)
{
  if (m <= 1 || n <= 1) return 1;
  if (n > m) return f(m, m);
  else return f(m, n - 1) + f(m - n, n);
}
