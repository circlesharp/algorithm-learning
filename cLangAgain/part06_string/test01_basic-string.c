#include <stdio.h>

void basicString()
{
  /* 字符串 in c */
  char word[] = { 'H', 'e', 'l', 'l', 'o', '!', '\0' };
  char word2[] = { 'H', 'e', 'l', 'l', 'o', '!', 0 }; // '\0' 可以是 0

  /* 0标记字符串结束，但不是字符串的一部分 */
  /* 计算字符串长度时不包含这个 0 */

  /* 字符串以数组形式存在，以数组或指针的形式访问 */

  /* string.h 有很多处理字符串的函数 */
}

void defindString()
{
  char* str = "Hello";
  char word[] = "Hello";
  char line[10] = "Hello";

  /* 字符串常量，又 字符串字面量 */
  /* "Hello" 会被编译器变成一个字符数组放在某处，数组的长度是 length + 1，因为结尾有表结束的 0 */
}

void charStar()
{
  /* 字符串和 int 不是放在同一个地方 */
  /* 相同的字符串常量地址一样 */
  /* 字符串的地址很小，在代码段，只读 */
  /* char* == const char* */
  /* 如果要修改，只能用数组的形式定义 */
  int i;
  char* s = "Hello";
  char* t = "Hello";
  printf("&i: %p, s: %p, t: %p;\n", &i, s, t);

  /* 数组：
    1. 作为本地变量空间自动被回收
    2. 适合构造字符串
  */

  /* 指针：
    1. 只读
    2. 处理参数
    3. 动态分配空间 // malloc
    4. 适合处理字符串
   */

  /* 字符串可以表达为 char* 的形式，char* 不一定是字符串 */
}

int main()
{
  basicString();

  defindString();

  charStar();

  return 0;
}