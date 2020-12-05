#include <stdio.h>

struct point {
  int x;
  int y;
  int quadrant;
};

struct point getPoint(struct point);
void putPoint(struct point);
void structAsParms()
{
  struct point p = { 0, 0 };
  struct point q = getPoint(p);
  putPoint(p);
  putPoint(q);
}

struct point* getStructPtr(struct point* ptr);
void putPointPtr(const struct point* ptr);
void structPoint()
{
  struct point p = {1, 2, 1};
  struct point* pPtr = &p;
  /* (*p).x == p->x */
  printf("pPtr->x: %d, pPtr->y: %d, pPtr->quadrant: %d\n", pPtr->x, pPtr->y, pPtr->quadrant);

  struct point* q = getStructPtr(&p);
  putPoint(*q);
  putPointPtr(&p);
}

int main()
{
  // structAsParms();

  structPoint();

  return 0;
}

struct point getPoint(struct point p)
{
  scanf("%d %d", &p.x, &p.y);

  if (p.x > 0 && p.y > 0)
    p.quadrant = 1;
  else if (p.x > 0 && p.y < 0)
    p.quadrant = 2;
  else if (p.x < 0 && p.y < 0)
    p.quadrant = 3;
  else if (p.x < 0 && p.y > 0)
    p.quadrant = 4;
  else
    p.quadrant = -1;
  
  return p;
}

struct point* getStructPtr(struct point* ptr)
{
    scanf("%d %d", &ptr->x, &ptr->y);

  if (ptr->x > 0 && ptr->y > 0)
    ptr->quadrant = 1;
  else if (ptr->x > 0 && ptr->y < 0)
    ptr->quadrant = 2;
  else if (ptr->x < 0 && ptr->y < 0)
    ptr->quadrant = 3;
  else if (ptr->x < 0 && ptr->y > 0)
    ptr->quadrant = 4;
  else
    ptr->quadrant = -1;
  
  return ptr;
}

void putPoint(struct point p)
{
  printf("(%d, %d), in %d-quadrant\n", p.x, p.y, p.quadrant);
}

/* 注意使用了 const, 强调了只打印不修改 */
void putPointPtr(const struct point* p)
{
  printf("(%d, %d), in %d-quadrant\n", p->x, p->y, p->quadrant);
}
