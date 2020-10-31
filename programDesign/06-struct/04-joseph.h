#include<iostream>
using namespace std;

/*
约瑟夫问题

编号为 1-n 的 n 个人围成圆圈
从第 p 个人开始，顺时针报数
数到第 m 的人出列
直到剩下1人
*/

struct Node
{
  int num;
  Node *ahead;
  Node *next;
};
Node *Create(int N);
Node *Search(Node *head, int P);
Node *Release(Node *head, int M);

int Joseph()
{
  int N, P, M = 0;
  cin >> N >> P >> M;
  Node *head = Create(N);
  head = Search(head, P);
  while (head->next != head)
    head = Release(head, M);
  return head->num;
}

Node *Create(int N)
{
  int n = 1;
  Node *node = new Node;
  node->num = n;
  Node *head = node;
  Node *tail = head;
  while (n++ < N) // 讲究
  {
    node = new Node;
    node->num = n;
    tail->next = node;
    node->ahead = tail;
    tail = tail->next;
  }
  tail->next = head;
  head->ahead = tail;
  return head;
}

Node *Search(Node *head, int P)
{
  while (head->num != P)
    head = head->next;
  return head;
}

Node *Release(Node *head, int M)
{
  int count = 1;
  Node *temp = head;
  while (count++ < M)
    temp = temp->next;
  temp->ahead->next = temp->next;
  temp->next->ahead = temp->ahead;
  cout << temp->num << ',';
  head = temp->next;
  delete temp;
  return head;
}

string _main()
{
  int rst = Joseph();
  cout << "\nThe result is: " << rst << endl;
  return "04-joseph";
}
