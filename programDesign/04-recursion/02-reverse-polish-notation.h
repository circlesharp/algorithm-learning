#include<iostream>
using namespace std;

double notation();

string _main()
{
  cout << notation();
  return "reverse-polish-notation";
}

double notation()
{
  char str[10];
  cin >> str;
  switch (str[0])
  {
    case '+': return notation() + notation(); // 可在此加断点调试
    case '-': return notation() - notation();
    case '*': return notation() * notation();
    case '/': return notation() / notation();
    default: return atof(str);
  }
}
