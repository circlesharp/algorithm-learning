#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAXSIZE 20
#define ERROR -1

typedef int ElementType;

typedef struct {
  ElementType* data; /* 储存元素的数组 */
  int top; /* 栈顶指针 */
  int maxSize; /* 堆栈最大容量 */
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
  stack->data = (ElementType*)malloc(maxSize * sizeof(ElementType));
  stack->top = -1;
  stack->maxSize = maxSize;
  return stack;
}

bool IsFull(Stack* stack)
{
  return (stack->top == stack->maxSize - 1);
}

bool IsEmpty(Stack* stack)
{
  return (stack->top == -1);
}

bool Push(Stack* stack, ElementType x)
{
  if (IsFull(stack)) {
    printf("The stack is full.\n");
    return false;
  }
  stack->top += 1;
  stack->data[stack->top] = x;
  return true;
}

ElementType Pop(Stack* stack)
{
  if (IsEmpty(stack)) {
    printf("The stack is empty.\n");
    return ERROR;
  }
  stack->top -= 1; /* 标记 top 就可以，不必真的删除 */
  return stack->data[stack->top];
}

void print(Stack* stack)
{
  printf("The capacity of stack is: %d / %d\n", stack->top + 1, stack->maxSize);
  for (int i = 0; i <= stack->top; i++) {
    printf("%-4d", stack->data[i]);
  }
}
