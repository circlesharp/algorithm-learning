#include <stdio.h>

struct point { // size 8
  int x; // size 4
  int y; // size 4
};

struct rectangle { // size 20
  struct point p1; // size 8
  struct point p2; // size 8
  int order; // size 4
};

void printRect(const struct rectangle* r)
{
  printf("(%d, %d) to (%d, %d)\n", r->p1.x, r->p1.y, r->p2.x, r->p2.y);
}

int main()
{
  struct rectangle rects[] = {
    {{1, 2}, {3, 4}},
    {{5, 6}, {7, 8}},
  };

  for (int i = 0; i < sizeof(rects) / sizeof(rects[0]); i++)
    printRect(&rects[i]);
  
  return 0;
}
