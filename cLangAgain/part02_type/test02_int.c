#include <stdio.h>

void testIntRange()
{
  int a = 0, maxRange;
  while (1) {
    a++;
    if (a < 0) {
      maxRange = a;
      break;
    }
  }
  printf("Int 类型在本机可表达的范围是 %d ~ %d.\n", maxRange, maxRange - 1);
}

void testUnsignedIntRange()
{
  unsigned int a = 0;
  unsigned int maxRange;
  while (1) {
    a++;
    if (a == 0) {
      maxRange = a;
      break;
    }
  }
  printf("unsigned Int 类型在本机可表达的范围是 %u ~ %u.\n", maxRange, maxRange - 1); // 无符号 %u （不管数据在计算机怎么存储，重点在于我们怎么看待）
}

void testTheWayToTreatData()
{
  char c = -1; // 11111111
  int i = -1; // 0xffffffff
  printf("c=%u, i=%u\n", c, i); // 不管怎么存储，关键我们怎么看
};

void testBase()
{
  // 八进制、十六进制只是如何把数字表达为字符串，与内部如何表达数字无关
  // 十六进制的两位可以表达一个char
  char c = 012;
  int i = 0x12;
  printf("c=%d, i=%d\n", c, i);
  printf("c=0%o, i=0x%x\n", c, i); // %o, %x
}

int main()
{
  char a = 255; // size(char) == 1, 255 => 11111111, -2^7 ~ 2^7 - 1
  unsigned char b = 255; // 0 ~ 2^8 - 1, 但 unsigned 的目的不是为了扩展数能表达的范围，而是为了纯二进制运算，为了移位
  printf("a=%d, b=%d\n", a, b);

  // testIntRange();
  // testUnsignedIntRange();
  // testTheWayToTreatData();
  testBase();

  return 0;
}