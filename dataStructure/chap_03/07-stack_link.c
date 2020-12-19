/* 链栈 */

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAXSIZE 20
#define ERROR -1

typedef int ElementType;

typedef struct _SNode {
  ElementType data;
  struct _SNode* next;
} SNode;

typedef struct {
  SNode* top; /* 第一个结点就是 top */
  int length;
  int maxSize;
} Stack;

/* 堆栈的操作集 */
Stack* CreateStack(int maxSize);
bool IsFull(Stack* stack);
bool Push(Stack* stack, ElementType x);
bool IsEmpty(Stack* stack);
ElementType Pop(Stack* stack);
void print(Stack* stack);

/* 主函数 */
int main()
{
  Stack* stack = CreateStack(MAXSIZE);

  for (int i = 0; !IsFull(stack); i++) {
    Push(stack, i);
    printf("pushing %d into stack.\n", i);
  }

  Push(stack, 21);

  for (int i = 0; i < 15; i++) {
    Pop(stack);
    printf("poping %dth out of stack.\n", i);
  }

  print(stack);

  return 0;
}

Stack* CreateStack(int maxSize)
{
  Stack* stack = (Stack*)malloc(sizeof(Stack));
  stack->top = NULL;
  stack->length = 0;
  stack->maxSize = maxSize;
  return stack;
}

bool IsFull(Stack* stack)
{
  return stack->length == stack->maxSize;
}

bool IsEmpty(Stack* stack)
{
  return stack->length == 0;
}

bool Push(Stack* stack, ElementType x)
{
  if (IsFull(stack)) {
    printf("The stack is full.\n");
    return false;
  }

  /* create sNode */
  SNode* sNode = (SNode*)malloc(sizeof(SNode));
  sNode->data = x;
  sNode->next = stack->top;

  /* update stack */
  stack->top = sNode;
  stack->length += 1;

  return true;
}

ElementType Pop(Stack* stack)
{
  if (IsEmpty(stack)) {
    printf("The stack is empty.\n");
    return ERROR;
  }

  /* update stack */
  SNode* topNode = stack->top;
  stack->top = topNode->next;
  stack->length -= 1;
  
  /* delete sNode */
  ElementType rst = topNode->data;
  free(topNode);

  return rst;
}

void print(Stack* stack)
{
  printf("The capacity of stack is: %d / %d\n", stack->length, stack->maxSize);
  SNode* tempNode = (SNode*)malloc(sizeof(SNode));
  tempNode = stack->top;
  for (int i = 0; i <= stack->length; i++) {
    printf("%-4d", tempNode->data);
    tempNode = tempNode->next;
  }
  free(tempNode);
}
