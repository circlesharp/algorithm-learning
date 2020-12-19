/* 队列 顺序结构 */

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAXSIZE 6
#define ERROR -1

typedef int ElementType;

typedef struct {
  ElementType* data;
  int front;
  int rear;
  int maxSize;
} Queue;

Queue* CreateQueue(int maxSize);
bool IsFull(Queue* queue);
bool AddQ(Queue* queue, ElementType x);
bool IsEmpty(Queue* queue);
ElementType DeleteQ(Queue* queue);
void print(Queue* queue);

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

  AddQ(queue, 199);
  AddQ(queue, 199);
  AddQ(queue, 199);
  print(queue);

  return 0;
}

Queue* CreateQueue(int maxSize)
{
  Queue* queue = (Queue*)malloc(sizeof(Queue));
  queue->data = (ElementType*)malloc(maxSize * sizeof(ElementType));
  queue->front = 0;
  queue->rear = 0;
  queue->maxSize = maxSize;

  return queue;
}

bool IsFull(Queue* queue)
{
  return (queue->rear + 1) % queue->maxSize == queue->front;
}

bool AddQ(Queue* queue, ElementType x)
{
  if (IsFull(queue)) {
    printf("The queue is full.\n");
    return false;
  }

  queue->rear = (queue->rear + 1) % queue->maxSize;
  queue->data[queue->rear] = x;

  return true;
}

bool IsEmpty(Queue* queue)
{
  return queue->rear == queue->front;
}

ElementType DeleteQ(Queue* queue)
{
  if (IsEmpty(queue)) {
    printf("The queue is empty.\n");
    return false;
  }

  queue->front = (queue->front + 1) % queue->maxSize;
  return queue->data[queue->front];
}

void print(Queue* queue)
{
  if (queue->front > queue->rear) {
    for (int i = queue->front + 1; i <= queue->maxSize + queue->rear; i++) {
      printf("%-4d", queue->data[i % queue->maxSize]);
    }
  }

  else if (queue->front < queue->rear) {
    for (int i = queue->front + 1; i <= queue->rear; i++) {
      printf("%-4d", queue->data[i]);
    }
  }

  /* IsEmpty(queue) */
  else {
    printf("The queue is empty.\n");
    return false;
  }

  printf("\nprint end.\n");
}
