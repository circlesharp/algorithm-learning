#include<iostream>
using namespace std;

int fact(int);
int recur();
int q(int);
int fab(int);
void dec_to_bin(int);
void hanno(char, char, char, int);
void move(char, char);
void test_5();
void test_6();
void test_7();
void test_8();
void test_9();
void test_a();

string _main()
{
  // 1. 函数可以嵌套调用，但不能嵌套定义（所有函数一律平等）

  // 2. 递归调用
  // 一个函数在其定义中直接或间接调用自身
  // 递归调用和普通调用没有区别（开辟新的内存空间）
  cout << fact(4) << endl;

  // 3. 深入理解递归的过程
  // recur();

  // 4. 场景一：用递归完成递推
  cout << q(4) << endl;
  cout << fab(4) << endl;

  // 5. 场景二：模拟连续发生的动作
  dec_to_bin(123);
  hanno('a', 'c', 'b', 4);

  return "01-recursion";
}

int fact(int n)
{
  if (n == 1) return 1;
  return n * fact(n - 1);
}

int recur()
{
  char c;
  c = cin.get(); // cin.get 能读空格、回车
  if (c != '\n') recur(); // 读到换行，先打印换行
  cout << c ; // 反着打印，没有换行
  return 0;
}

int q(int n)
{
  /* ::: 用递归实现递推 ::: */
  // q(n) = q(n - 1) + n => 清晰表达出了递推的关系
  // 虽然我不知道 q(n), 但我知道怎么算
  // 但还得知道 n 在边界情况下的结果

  /* ::: 递归、递推的异同 ::: */
  // 递推：关注点在 起始条件
  // 递归：关注点在 求解目标
  // 都重在表现 第i次 与 第i+1次 的关系

  /* ::: 方法 ::: */
  // 1. 把关注点放在要求解的目标上 (i=n)
  // 2. 找到 第n次 与 第n-1次 之间的关系 (通项公式)
  // 3. 确定 第1次 的返回结果
  if (n == 0) return 1;
  return q(n - 1) + n; // 要等后面的算出来才能 return
}

int fab(int n)
{
  if (n == 1 || n == 2) return 1;
  return fab(n - 1) + fab(n - 2);
}

void dec_to_bin(int x)
{
  // 这里和我用 js 写的有顺序的差异
  // 先递归调用，再去打印
  if (x / 2 != 0)
  {
    dec_to_bin(x / 2);
    cout << x % 2;
  }
  else cout << x; // 不是0就是1
}

void hanno(char from, char to, char passby, int n)
{
  /* ::: 模拟连续发生的动作 ::: */
  // 1. 搞清楚连续发生的动作是什么
  // 2. 搞清楚不同动作之间的关系
  // 3. 搞清楚边界条件
  if (n == 1) return move(from, to);
  hanno(from, passby, to, n - 1);
  move(from, to);
  hanno(passby, to, from, n - 1);
  return;
}

void move(char from, char to)
{
  cout << from << " => " << to << endl;
}
