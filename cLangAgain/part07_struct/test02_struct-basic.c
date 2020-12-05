#include <stdio.h>

void initStructBasic()
{
  /* 结构类型 date */
  /* 结构成员 year, month, day */
  struct date {
    int month;
    int day;
    int year;
  };

  /* today 的类型是 struct date, not date */
  /* 它叫结构变量 */
  struct date today;

  today.year = 2020;
  today.month = 12;
  today.day = 5;

  printf("Today's date is %d-%d-%d.\n", today.year, today.month, today.day);
}

void initStructAnomymous()
{
  // 这个结构没有名字，在很远的将来不需要用到这个结构类型
  struct {
    int x;
    int y;
  } s1, s2;
}

initStructGreedy()
{
  struct point {
    int x;
    int y;
  } p1, p2;
}

void initStructVar()
{
  struct point {
    int x;
    int y;
    int quadrant;
  };

  /* 结构变量初始化 */
  struct point p1 = { 1, 2, 1 }; // method 1
  struct point p2 = { .x = 1, .y = 2 }; // method 2，缺失的为0

  printf("The point p1: %d, %d, %d\n", p1.x, p1.y, p1.quadrant);
  printf("The point p2: %d, %d, %d\n", p2.x, p2.y, p2.quadrant);
}

void structOperate()
{
  struct point {
    int x;
    int y;
  };
  struct point p1, p2;

  // 下面的行为数组不能干
  p1 = (struct point){5, 10}; // 相当于 p1.x = 5; p1.y = 10;
  p2 = p1; // 相当于 p2.x = p1.x; p2.y = p1.y;

  /* 结构变量名不是它的地址, 要使用 & */
  struct point* ptr = &p1;
  printf("sizeof(ptr): %d, sizeof(p1): %d\n", sizeof(ptr), sizeof(p1));
}

int main()
{
  initStructBasic();

  /* 无名结构 */
  initStructAnomymous();

  /* 同时声明 结构类型 和定义 结构变量 */
  initStructGreedy();

  /* 结构变量的初始化 */
  initStructVar();

  /* 结构运算 */
  structOperate();

  return 0;
}
