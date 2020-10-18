#include<iostream>
#include<iomanip>
#include<cmath>
using namespace std;
int tiPrime()
{
	int sum = 0, a[100] = { 0 };
	for (int i = 2; i < sqrt(100.0); i++) // 优化１：缩小范围
	{
		sum = i;
		if (a[sum] != 0) continue; // 优化2：被标定的数的不需要再次检查
		while (sum < 100)
		{
			sum = sum + i;
			if (sum < 100) a[sum] = 1;
		}
	}
	for (int i = 2; i < 100; i++)
	{
		if (a[i] == 0) cout << setw(4) << i;
	}
	return 0;
}