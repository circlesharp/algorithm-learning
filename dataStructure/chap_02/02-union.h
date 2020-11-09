#include<stdio.h>

char *_main()
{
  int i; long l; short s;
  union key
  {
    short k;
    char ch[2];
  } u;

  // u.k = 258;
  printf( "Memory size occupied by u : %d\n", sizeof(u));
  printf( "Memory size occupied by i : %d %d %d\n", sizeof(i), sizeof(l), sizeof(s)); // 4 4 2
  printf("%d %d \n", u.ch[0], u.ch[1]);
  
  return "char_02, 02-union";
}
