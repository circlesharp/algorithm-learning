#include<stdio.h>
#include<stdlib.h>

typedef int ElementType;
const int ERROR_CODE = -1;
ElementType *ERROR_PTR = NULL;

typedef struct LNode *PtrToLNode;
struct LNode
{
  ElementType Data;
  PtrToLNode Next;
};
typedef PtrToLNode Position;
typedef PtrToLNode List;

/* 求表长 O(n) */
int Length(List L)
{
  Position p;
  int cnt = 0;
  p = L; // p 指向 L 的第一个结点
  while (p)
  {
    p = p->Next;
    cnt++;
  }
  return cnt;
}

/* 查找 1 按序号查找 O(n) */
ElementType FindKth(List L, int K)
{
  Position p;
  int cnt = 1;
  p = L;
  while (p && cnt < K)
  {
    p = p->Next;
    cnt++;
  }
  if ((cnt == K) && p)
    return p->Data;
  else
    return ERROR_CODE;
}

/* 查找 2 按值查找 O(n) */
Position Find(List L, ElementType X)
{
  Position p = L;
  while (p && p->Data != X)
    p = p->Next;
  if (p) return p;
  else return (Position)ERROR_PTR;
}

/* 插入 (无头结点) */
List Insert_1(List L, ElementType X, int i)
{
  Position tmp, pre;
  tmp = (Position)malloc(sizeof(struct LNode));
  tmp->Data = X;
  if (i == 1)
  {
    tmp->Next = L;
    return tmp;
  }
  else
  {
    int cnt = 1;
    pre = L;
    while (pre && cnt < i - 1)
    {
      pre = pre->Next;
      cnt++;
    }
    if (pre == NULL || cnt != i - 1)
    {
      printf("插入位置参数错误\n");
      free(tmp);
      return (List)ERROR_PTR;
    }
    else
    {
      tmp->Next = pre->Next;
      pre->Next = tmp;
      return L;
    }
  }
}

bool Insert_2(List L, ElementType X, int i)
{
  Position tmp, pre;
  int cnt = 0;
  pre = L;
  while (pre && cnt < i - 1)
  {
    pre = pre->Next;
    cnt++;
  }
  if (pre == NULL || cnt != i - 1)
  {
    printf("插入位置参数错误\n");
    return false;
  }
  else
  {
    tmp = (Position)malloc(sizeof(struct LNode));
    tmp->Data = X;
    tmp->Next = pre->Next;
    pre->Next = tmp;
    return true;
  }
}

bool Delete(List L, int i)
{
  Position tmp, pre;
  int cnt = 0;

  pre = L;
  while (pre && cnt < i - i)
  {
    pre = pre->Next;
    cnt++;
  }
  if (pre == NULL || cnt != i - 1 || pre->Next == NULL)
  {
    printf("插入位置参数错误\n");
    return false;
  }
  else
  {
    tmp = pre->Next;
    pre->Next = tmp->Next;
    free(tmp);
    return true;
  }
}

char *_main()
{
  // List list = MakeEmpty();

  // if (Insert(list, 1, 1)) printf("Insert the first element %d in position: %d.\n",  list->Data[list->Last], list->Last);
  
  // Position positonOne = Find(list, 1); // 我认为这里有瑕疵，position小1
  // printf("Find the value 1 in position: %d.\n", positonOne);
  
  // if (Delete(list, 2)) printf("Delete position 2\n", list->Last);
  // if (Delete(list, 1)) printf("Delete position 1, and the last is %d.\n", list->Last);
  
  return "char_03, 04-linear_list_2";
}
