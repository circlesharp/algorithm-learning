#include <stdio.h>

typedef union {
  int i;
  char ch[sizeof(int)];
} CHI;

void useUnion()
{
  CHI chi;
  chi.i = 1234; // 0x000004d2

  for (int i = 0; i < sizeof(int); i++)
    printf("%02hhX", chi.ch[i]); // D2 04 00 00 低位在前
  
  printf("\n");
}

int main()
{
  useUnion();

  return 0;
}