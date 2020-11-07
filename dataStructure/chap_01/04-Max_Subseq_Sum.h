#include<stdio.h>
#include<math.h>
#include<time.h>

/* O(pow(n, 3)) */
int MaxSubseqSum_1(int List[], int N)
{
  int ThisSum, MaxSum = 0;
  for (int i = 0; i < N; i++)
  {
    for (int j = i; j < N; j++)
    {
      ThisSum = 0;
      for (int k = i; k <= j; k++)
        ThisSum += List[k];
      if (ThisSum > MaxSum)
        MaxSum = ThisSum;
    }
  }
  return MaxSum;
}

/* O(pow(n, 2)) */
int MaxSubseqSum_2(int List[], int N)
{
  int ThisSum, MaxSum = 0;
  for (int i = 0; i < N; i++)
  {
    ThisSum = 0;
    for (int j = i; j < N; j++)
    {
      ThisSum += List[j];
      if (ThisSum > MaxSum)
        MaxSum = ThisSum;
    }
  }
  return MaxSum;
}


/*
::: 分而治之 :::
O(n * log(n))
*/
int Max3(int, int, int);
int DivideAndConquer(int [], int, int);

int MaxSubseqSum_3(int List[], int N)
{
  return DivideAndConquer(List, 0, N - 1);
}

int Max3(int A, int B, int C)
{
  return A > B
    ? A > C
      ? A
      : C
    : B > C
      ? B
      : C;
}

int DivideAndConquer(int List[], int left, int right)
{
  int MaxLeftSum, MaxRightSum;
  int MaxLeftBorderSum, MaxRightBorderSum;
  int LeftBorderSum, RightBorderSum;
  int center, i;

  if (left == right)
  {
    if (List[left] > 0)
      return List[left];
    return 0;
  }

  center = (left + right) / 2;
  /* center 左右两边的各自的最大值 */
  MaxLeftSum = DivideAndConquer(List, left, center);
  MaxRightSum = DivideAndConquer(List, center + 1, right);

  /* center 左边（右边）的且包含 center 的最大值 */
  MaxLeftBorderSum = 0;
  LeftBorderSum = 0;
  for (i = center; i >= left; i--)
  {
    LeftBorderSum += List[i];
    if (LeftBorderSum > MaxLeftBorderSum)
      MaxLeftBorderSum = LeftBorderSum;
  }

  MaxRightBorderSum = 0;
  RightBorderSum = 0;
  for (i = center + 1; i <= right; i++)
  {
    RightBorderSum += List[i];
    if (RightBorderSum > MaxRightBorderSum)
      MaxRightBorderSum = RightBorderSum;
  }

  return Max3(MaxLeftSum, MaxRightSum, MaxLeftBorderSum + MaxRightBorderSum);
}

/*
::: 在线处理 :::
O(n)
*/
int MaxSubseqSum_4(int List[], int N)
{
  int ThisSum = 0, MaxSum = 0;
  for (int i = 0; i < N; i++)
  {
    ThisSum += List[i];
    if (ThisSum > MaxSum)
      MaxSum = ThisSum; // 让计算机记住这关键的中间结果，避免重复计算
    else if (ThisSum < 0)
      ThisSum = 0;
  }
  return MaxSum;
}

char *_main()
{
  int list[8] = {-1, 3, -2, 4, -6, 1, 6, -1};

  int rst_1 = MaxSubseqSum_1(list, 8);
  int rst_2 = MaxSubseqSum_2(list, 8);
  int rst_3 = MaxSubseqSum_3(list, 8);
  int rst_4 = MaxSubseqSum_4(list, 8);

  printf("the rst of are: %d, %d, %d, %d \n", rst_1, rst_2, rst_3, rst_4);

  return "04-Max_Subseq_Sum";
}
