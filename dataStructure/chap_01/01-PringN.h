#include<iostream>
using namespace std;

void PrintN_1(int N)
{
  for (int i = 1; i <= N; i++)
    cout << i << endl;
}

void PrintN_2(int N)
{
  if (N > 0)
  {
    PrintN_2(N - 1);
    cout << N << endl;
  }
}

char *_main()
{
  int N;
  cin >> N;
  PrintN_2(N); // 当N很大，不能继续工作了
  return "char_01, 01-PrintN";
}
