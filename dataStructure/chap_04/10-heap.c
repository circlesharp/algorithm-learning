/* 堆 Heap (优先队列 Priority Queue) */
/* 堆是特殊的队列，取元素按元素的优先级大小，而不是进入队列的先后顺序 */

/*
::: 实现方式 :::
1. 使用数组（无序），插入容易，删除困难，需要移动
2. 使用数组（有序），插入困难，删除容易，需要移动
3. 使用链表（无序），插入容易，删除困难，不需移动
4. 使用链表（有序），插入困难，删除容易，不需移动

::: 使用完全二叉树 :::
1. 使用数组进行存储
2. 父结点的下标 floor(i/2)
3. 左右子结点的下标 i*2, i*2+1
4. 最大堆(MaxHeap) 任一结点的值大于或等于子结点，根节点在堆中是最大的
5. 最小堆(MinHeao) ...
6. 兄弟结点不存在约束关系

::: 最大堆的操作集 :::
1. MaxHeap CreateHeap(int maxSize)
2. bool IsFull(MaxHeap H)
3. bool Insert(MaxHeap H, ElementType X)
4. bool IsEmpty(MaxHeap H)
5. ElementType DeleteMax(MaxHeap H)

::: 最大堆的建立 :::
将一维数组组织成最大堆
方法1 逐个 Insert，O(NlogN)
方法2 调整法，O(N)

*/

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>

#define MAXDATA 100
#define ERROR -1

typedef int ElementType;
typedef struct {
  ElementType* data;
  int size;
  int capacity;
} Heap;
typedef Heap MaxHeap;

MaxHeap* CreateHeap(int maxSize);
bool IsFull(MaxHeap* maxHeap);
bool Insert(MaxHeap* maxHeap, ElementType x);
bool IsEmpty(MaxHeap* maxHeap);
ElementType DeleteMax(MaxHeap* maxHeap);
MaxHeap* BuildHeap(ElementType* rawData, int size);
void PercDown(MaxHeap* heap, ElementType x, int p);
void printHeap(MaxHeap* maxHeap);

int main()
{
  /* 常规测试 */
  {
    MaxHeap* maxHeap = CreateHeap(100);

    for (int i = 1; i < 15; i++)
      Insert(maxHeap, i);
    
    for (int i = 0; i < 7; i++)
      printf("%-4d", DeleteMax(maxHeap));

    printHeap(maxHeap);
  }

  /* 测试最大堆的建立 */
  {
    ElementType* rawData[] = {5, 63, 11, 66, 33, 44, 22, 55, 77, 88, 1, 15, 26, 74};
    MaxHeap* maxHeap = BuildHeap(rawData, sizeof(rawData) / sizeof(rawData[0]));
    printHeap(maxHeap);
  }

  return 0;
}


MaxHeap* CreateHeap(int maxSize)
{
  MaxHeap* maxHeap = (MaxHeap*)malloc(sizeof(MaxHeap));
  /* 第1个元素放第1位，第0位可放哨兵 */
  maxHeap->data = (ElementType*)malloc((maxSize + 1) * sizeof(ElementType));
  maxHeap->data[0] = MAXDATA;
  maxHeap->size = 0;
  maxHeap->capacity = maxSize;

  return maxHeap;
}

bool IsFull(MaxHeap* maxHeap)
{
  return maxHeap->size == maxHeap->capacity;
}

bool Insert(MaxHeap* maxHeap, ElementType x)
{
  if(IsFull(maxHeap)) {
    printf("error: the MaxHeap is full.\n");
    return false;
  }
  
  maxHeap->size += 1;
  int i = maxHeap->size;

  /* 上滤，不合格的父结点下移 */
  for ( ; maxHeap->data[i / 2] < x; i /= 2)
    maxHeap->data[i] = maxHeap->data[i / 2];
  
  maxHeap->data[i] = x;
  return true;
}

bool IsEmpty(MaxHeap* maxHeap)
{
  return maxHeap->size == 0;
}

ElementType DeleteMax(MaxHeap* maxHeap)
{
  if(IsFull(maxHeap)) {
    printf("error: the MaxHeap is empty.\n");
    return ERROR;
  }

  ElementType maxItem = maxHeap->data[1];
   ElementType x = maxHeap->data[maxHeap->size--];
  PercDown(maxHeap, x, 1);

  return maxItem;
}

MaxHeap* BuildHeap(ElementType* rawData, int size)
{
  /* step 1 建一个堆，顺序是乱的 */
  MaxHeap* maxHeap = (MaxHeap*)malloc(sizeof(MaxHeap));
  maxHeap->data = (ElementType*)malloc((size + 1) * sizeof(ElementType));
  maxHeap->data[0] = MAXDATA;
  for (int i = 0; i < size; i++)
    maxHeap->data[i + 1] = rawData[i];
  maxHeap->size = size;
  maxHeap->capacity = size;

  /* step 2 下滤，从最后一个有子结点的树开始，是其称为最大堆 */
  for (int i = size / 2; i > 0; i--)
    PercDown(maxHeap, maxHeap->data[i], i);

  return maxHeap;
}


/* helper 帮助下滤 */
/* heap 要调整的堆 */
/* x 要调整的data */
/* p 要调整的树的根结点 */
void PercDown(MaxHeap* heap, ElementType x, int p)
{
  int parent, child;
  for (parent = p; parent * 2 <= heap->size; parent = child) {
    /* 找到合适的 child */
    child = parent * 2;
    if (child != heap->size) { // 如果不是最后一个
      if (heap->data[child] < heap->data[child + 1]) // 如果右兄弟比它大
        child += 1; // 变成右兄弟
    }

    /* 下滤，大的子结点上移 */
    if (x >= heap->data[child])
      break;
    else
      heap->data[parent] = heap->data[child];
  }
  heap->data[parent] = x;
}

void printHeap(MaxHeap* maxHeap)
{
  printf("\nprinting start\n\n");
  int row = 1;
  for (int i = 1; i < maxHeap->size; i++) {
    if (i == pow(2, row)) {
      row += 1;
      printf("\n");
    }
    printf("%-4d", maxHeap->data[i]);
  }
  printf("\n\nprinting end\n");
}

