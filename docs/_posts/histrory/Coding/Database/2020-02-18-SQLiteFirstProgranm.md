---
title: SQLiteProgranm

tags: 
    - ProgramDesign
categories: 
  - Art
  - ProgramDesign
date: 2020-02-18 22:18:00
permalink: /pages/ed6088/
sidebar: auto
author: 
  name: frozen5293
  link: https://github.com/frozen5293
---
### __这个项目的坑太多了不知道怎么说__
```c++
#include <stdio.h>
----------------------------
#include "sqlite3.h"
1.库的引用要自己编译，添加，最简单的方法
就是这样直接拉到项目里。
----------------------------
#include <stdlib.h>
------------------------------------------------------------------------------
static int callback(void* NotUsed, int argc, char** argv, char** azColName) {
    int i;
    for (i = 0; i < argc; i++) {
        printf("%s = %s\n", azColName[i], argv[i] ? argv[i] : "NULL");
    }
    printf("\n");
    return 0;
}
//回调函数
------------------------------------------------------------------------------
int main(int argc, char* argv[])
{
    sqlite3* db;//sqlite3 类型数据库
    char* zErrMsg = 0; //字串 0
    int rc;
    const char* sql;
-----------------------------------------------------------------------------
    rc = sqlite3_open("test.db", &db); //传值给db<<open.database. 
    //对于sqlite3直接打开文件读写参数（文件，sqlite3类）
    //close(sqlite3类)
    //return->0通过
-----------------------------------------------------------------------------
    if (rc) {//0 -》 true
-----------------------------------------------------------------------------
        fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
        exit(0);
        //首先是上面这个函数：#include<cstdio> 干啥用的呢（文件流，传入文件流的文本，自定义）
        //stderr这是个啥呢？¹
-----------------------------------------------------------------------------        
    }
    else {
        fprintf(stderr, "Opened database successfully\n");
    }
    /*sql statement*/
    sql = "CREATE TABLE COMPANY("  \
        "ID INT PRIMARY KEY     NOT NULL," \
        "NAME           TEXT    NOT NULL," \
        "AGE            INT     NOT NULL," \
        "ADDRESS        CHAR(50)," \
        "SALARY         REAL );";
    /*exec sql statement*/
    -----------------------------------------------------------
    rc = sqlite3_exec(db, sql, callback, 0, &zErrMsg);
    //这个东西是执行SQL语句（sqlite3，SQL，回调函数，回调函数的第一个参数（void*），SQL错误消息字符串输出（调用sqlite3_free（）））²
    //回调参数（void*,int，char **,char**）;
    //第一个 int 是sql语句在该行的列数，
    //第二个char**是sql语句在该列的值,类型是 数组指针
    //第三个char**是sql语句在该列Name,类型是 数组指针
    -----------------------------------------------------------
    if (rc != SQLITE_OK) {
        fprintf(stderr, "SQL error: %s\n", zErrMsg);
        sqlite3_free(zErrMsg);
    }
    else {
        fprintf(stdout, "Table created successfully\n");
    }
    /* Create SQL statement */
    sql = "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) "  \
        "VALUES (1, 'Paul', 32, 'California', 20000.00 ); " \
        "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) "  \
        "VALUES (2, 'Allen', 25, 'Texas', 15000.00 ); "     \
        "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)" \
        "VALUES (3, 'Teddy', 23, 'Norway', 20000.00 );" \
        "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)" \
        "VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00 );";
    /* Execute SQL statement */
    rc = sqlite3_exec(db, sql, callback, 0, &zErrMsg);
    if (rc != SQLITE_OK) {
        fprintf(stderr, "SQL error: %s\n", zErrMsg);
        sqlite3_free(zErrMsg);
    }
    else {
        fprintf(stdout, "Records created successfully\n");
    }
    sqlite3_close(db);
    return 0;
}
```
<article>
1.[2020-02-18-stderrFunction]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/posts/programdesign/stderrFunction">programdesign/stderrFunction</a>
2.[SQLite C接口<b>一站式查询执行界面</b>]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.sqlite.org/c3ref/exec.html">http://www.sqlite.org/c3ref/exec.html</a>
</article>