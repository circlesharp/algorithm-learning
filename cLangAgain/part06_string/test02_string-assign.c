#include <stdio.h>

void assignString()
{
  /* 没有产生新的字符串，只是让 s 指向 t 所指的字符串*/
  /* 对 s 的任何操作就是对 t 做的 */
  char* t = "title";
  char* s;
  s = t;
}

void ioString()
{
  /* %s*/
  /* scanf 读入一个单词，到空格、tab、回车为止 */
  /* scanf 是不安全的，不知道要读入内容的长度 */
  /* %numbers 告诉 scanf 最多读入 number 个字符 */

  char* s[4];
  scanf("%3s", s); // 因为是指针了，不用 &
  printf("%s\n", s);

  /* 常见错误：
    1. char* string; scanf("%s", string); 指针没有初始化
    2. char buffer[] = ""; // 这个数组的长度只有1
  */
}

int main()
{
  assignString();

  ioString();

  return 0;
}