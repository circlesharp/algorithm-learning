/* 标准头文件结构 */
/* 避免重复 #include */
#ifndef _HEADER_H_
#define _HEADER_H_

/* h 文件应该只有声明，没有定义 */
/* 声明是不产生代码的东西 */
/* 定义是产生代码的东西 */

double getMax(double a, double b);
char* getStr();
extern int publicNum;

#endif
