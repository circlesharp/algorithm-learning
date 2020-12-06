#include <stdio.h>
#include <stdlib.h>

const int BLOCK_SIZE = 5;

typedef struct {
  int* array;
  int size;
} Array;

Array array_create(int init_size);
void array_free(Array *a);
int array_size(const Array *a);
int* array_at(Array *a, int index);
void array_inflate(Array *a, int more_size);

int main()
{
  Array a = array_create(10);
  printf("array_size(&a): %d\n", array_size(&a));
  *array_at(&a, 0) = 10;
  printf("*array_at(&a, 0): %d\n", *array_at(&a, 0));
  *array_at(&a, 21) = 21;
  printf("array_size(&a): %d\n", array_size(&a));
  
  array_free(&a);
  return 0;
}

Array array_create(int init_size)
{
  Array a;
  a.size = init_size;
  a.array = (int*)malloc(sizeof(int) * init_size);
  return a;
}

void array_free(Array *a)
{
  free(a->array);
  a->array = NULL; // 保险起见，free(NULL)是无害的
  a->size = 0;
}

/* 封装 隐藏实现细节 */
int array_size(const Array *a)
{
  return a->size;
}

/* 返回指针的好处是可以赋值（作左值） */
int* array_at(Array *a, int index)
{
  /* 访问越界的时候自动增长 */
  if (index >= a->size)
    array_inflate(a, (index / BLOCK_SIZE + 1) * BLOCK_SIZE - a->size);
  return &(a->array[index]);
}

void array_inflate(Array *a, int more_size)
{
  int *p = (int*)malloc(sizeof(int) * (a->size + more_size));
  for (int i = 0; i < a->size; i++)
    p[i] = a->array[i];
  free(a->array);
  a->array = p;
  a->size += more_size;
}
