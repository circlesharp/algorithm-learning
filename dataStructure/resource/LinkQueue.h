#ifndef _LINK_QUEUE_H_
#define _LINK_QUEUE_H_

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
bool IsQueueFull(Queue* queue);
bool IsQueueEmpty(Queue* queue);
bool AddQ(Queue* queue, ElementType x);
ElementType DeleteQ(Queue* queue);
void printQueue(Queue* queue);

// ==============

Queue* CreateQueue(int maxSize)
{
  Queue* queue = (Queue*)malloc(sizeof(Queue));
  queue->front = NULL;
  queue->rear = NULL;
  queue->length = 0;
  queue->maxSize = maxSize;
}

bool IsQueueFull(Queue* queue)
{
  return queue->length == queue->maxSize;
}

bool IsQueueEmpty(Queue* queue)
{
  return queue->length == 0;
}

bool AddQ(Queue* queue, ElementType x){
  if (IsQueueFull(queue)) {
    printf("The queue is full.\n");
    return false;
  }

  /* 处理结点 */
  QNode* qNode = (QNode*)malloc(sizeof(QNode));
  qNode->data = x;
  qNode->next = NULL;

  /* 处理队列 */
  if (IsQueueEmpty(queue)) {
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
  if (IsQueueEmpty(queue)) {
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

void printQueue(Queue* queue)
{
  if (IsQueueEmpty(queue))
    printf("The queue is empty.");

  QNode* tempNode = queue->front;
  while (tempNode) {
    printf("%-4d", tempNode->data);
    tempNode = tempNode->next;
  }

  printf("\nprint end.\n");
}

#endif
