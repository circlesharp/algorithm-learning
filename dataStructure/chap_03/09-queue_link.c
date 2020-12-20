/* 队列 链式存储 */

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAXSIZE 6
#define ERROR -1

typedef int ElementType;

typedef struct _QNode {
  ElementType data;
  struct _QNode* next;
} QNode;

typedef struct {
  QNode* front;
  QNode* rear;
  int length;
  int maxSize;
} Queue;

Queue* CreateQueue(int maxSize);
bool IsFull(Queue* queue);
bool AddQ(Queue* queue, ElementType x);
bool IsEmpty(Queue* queue);
ElementType DeleteQ(Queue* queue);
void print(Queue* queue);

// ===================
int main()
{
  Queue* queue = CreateQueue(MAXSIZE);
  for (int i = 0; i < 5; i++) {
    AddQ(queue, i);
  }
  print(queue);

  DeleteQ(queue);
  DeleteQ(queue);
  print(queue);

  AddQ(queue, 99);
  AddQ(queue, 99);
  print(queue);

  DeleteQ(queue);
  DeleteQ(queue);
  print(queue);

  /* 链式存储比顺序存储能多容纳1个 */
  AddQ(queue, 199);
  AddQ(queue, 199);
  AddQ(queue, 199);
  AddQ(queue, 199);
  print(queue);

  return 0;
}

Queue* CreateQueue(int maxSize)
{
  Queue* queue = (Queue*)malloc(sizeof(Queue));
  queue->front = NULL;
  queue->rear = NULL;
  queue->length = 0;
  queue->maxSize = maxSize;
}

bool IsFull(Queue* queue)
{
  return queue->length == queue->maxSize;
}

bool IsEmpty(Queue* queue)
{
  return queue->length == 0;
}

bool AddQ(Queue* queue, ElementType x){
  if (IsFull(queue)) {
    printf("The queue is full.\n");
    return false;
  }

  /* 处理结点 */
  QNode* qNode = (QNode*)malloc(sizeof(QNode));
  qNode->data = x;
  qNode->next = NULL;

  /* 处理队列 */
  if (IsEmpty(queue)) {
    queue->front = qNode;
    queue->rear = qNode;
  }
  else {
    queue->rear->next = qNode;
    queue->rear = qNode;
  }

  queue->length += 1;
}

ElementType DeleteQ(Queue* queue)
{
  if (IsEmpty(queue)) {
    printf("The queue is empty.\n");
    return ERROR;
  }

  /* 处理队列 */
  QNode* tempNode = queue->front;
  queue->front = tempNode->next;
  queue->length -= 1;

  /* 处理头结点 */
  ElementType rst = tempNode->data;
  free(tempNode);
  return rst;
}

void print(Queue* queue)
{
  if (IsEmpty(queue))
    printf("The queue is empty.");

  QNode* tempNode = queue->front;
  while (tempNode) {
    printf("%-4d", tempNode->data);
    tempNode = tempNode->next;
  }

  printf("\nprint end.\n");
}
