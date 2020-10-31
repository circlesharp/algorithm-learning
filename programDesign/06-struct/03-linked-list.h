#include<iostream>
using namespace std;

/*
::: linked-list 链表 :::

1. 链表头
  指向第一个链表结点的指针
2. 链表节点：链表种的每一个元素
  1. 当前节点的数据
  2. 下一个节点的地址
3. 链表尾
  不再指向其他节点的节点
  其地址部分放一个 NULL，表示链表到此结束
*/


/* 动态申请内存空间 */
void memoryOperate();


/* 创建链表 */
struct student
{
  int id;
  student *next;
};
student *createLinkedList();

string _main()
{
  memoryOperate();
  createLinkedList();

  return "03-linked-list";
}

void memoryOperate()
{
  int *pint = new int(1024); // new
  cout << "pint: " << pint << ", *pint: " << *pint << endl;
  delete pint; // delete

  int *pia = new int[4];
  delete [] pia;
}

student *createLinkedList()
{
  student *head, *temp;
  int num, n = 0;
  temp = head;
  cin >> num;
  while (num != -1)
  {
    n++;
    temp->id = num;
    temp->next = new student; // 申请内存空间
    temp = temp->next;
    cin >> num;
  }
  if (n == 0) head = NULL;
  else temp->next = NULL;
  return head;
}
