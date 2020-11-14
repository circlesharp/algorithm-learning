#include<stdio.h>
#include<stdlib.h>

const int MAXSIZE = 20;
const int ERROR = -1;
typedef int ElementType;

typedef int Position;
typedef struct LNode * PtrToLNode;
struct LNode
{
  ElementType Data[MAXSIZE];
  Position Last;
};
typedef PtrToLNode List;

/* 初始化 */
List MakeEmpty()
{
  List L;
  L = (List)malloc(sizeof(struct LNode));
  L->Last = -1;
  return L;
}

/* 查找 O(n) */
Position Find(List L, ElementType X)
{
  Position i = 0;
  while (i <= L->Last && L->Data[i] != X) i++;
  if (i > L->Last) return ERROR;
  else return i;
}

/* 插入 O(n) */
bool Insert(List L, ElementType X, int i)
{
  Position j;
  
  // step 1 检查表空间
  if (L->Last == MAXSIZE - 1) {
    printf("表满\n");
    return false;
  }

  // step 2 检验插入位序的合法性 1 ~ (n + 1)
  if (i < 1 || i > L->Last + 2) {
    printf("插入位序不合法\n");
    return false;
  }

  // step 3 移动 (n - i + 1) 个元素, O(n)
  for (j = L->Last; j >= i - 1; j--)
    L->Data[j + 1] = L->Data[j];
  L->Data[i-1] = X;
  L->Last++;
  return true;
}

/* 删除元素 O(n) */
bool Delete(List L, int i)
{
  Position j;
  if (i < 1 || i > L->Last + 1)
  {
    printf("位序%d不存在元素\n", i);
    return false;
  }
  for (j = i; j <= L->Last; j++)
    L->Data[j-1] = L->Data[j];
  L->Last--;
  return true;
}

char *_main()
{
  List list = MakeEmpty();

  if (Insert(list, 1, 1)) printf("Insert the first element %d in position: %d.\n",  list->Data[list->Last], list->Last);
  
  Position positonOne = Find(list, 1); // 我认为这里有瑕疵，position小1
  printf("Find the value 1 in position: %d.\n", positonOne);
  
  if (Delete(list, 2)) printf("Delete position 2\n", list->Last);
  if (Delete(list, 1)) printf("Delete position 1, and the last is %d.\n", list->Last);
  
  return "char_03, 03-linear_list_1";
}
