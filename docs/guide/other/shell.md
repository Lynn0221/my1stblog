# shell

## 进入和退出
`bash` 命令启动 bash

`exit` 退出 bash（`Ctrl + d`）

`pwd` 显示当前所在的目录

`bash --version`, `echo $BASH_VERSION` 查看 bash 版本

## `echo` 命令
`echo` 命令的作用是在屏幕输出一行文本，可以将该命令的参数原样输出。

### 参数
* `-n` 取消末尾的回车符
  ```sh
  $ echo a;echo b
  a
  b

  $ echo -n a;echo b
  ab
  ```

* `-e` 解释引号里的特殊字符
  ```sh
  $ echo "Hello\nWorld"
  Hello\nWorld

  $ echo -e "Hello\nWorld"
  Hello
  World
  ```

## 命令的组合
* `;` 第二个命令总是接着第一个命令执行，不管第一个命令执行成功或失败
  
* `&&` 第一个命令运行成功，才会继续执行第二个命令
  
* `||` 第一个命令运行失败，才会继续执行第二个命令

## `type` 命令
`type` 命令用来判断命令的来源（内部命令，外部程序）
```sh
$ type echo
echo is a shell builtin
$ type ls
ls is hashed(/bin/ls)
```
### 参数
* `-a` 查看一个命令的所有定义
  
* `-t` 可以返回一个命令的类型: 别名(alias)，关键词(keyword)，函数(function)，内置命令(builtin)，文件(file)
  
  ```sh
  $ type -a echo
  echo is shell builtin
  echo is /usr/bin/echo
  echo is /bin/echo

  $ type -t bash
  file
  $ type -t if
  keyword
  ```

## `declare` 命令
`declare` 命令可以声明一些特殊类型的变量，为变量设置一些限制，比如声明只读类型的变量和整数类型的变量
`declare OPTION VARIABLE=VALUE`

参数: 
* `-a` : 声明数组变量
* `-f` : 输出所有函数定义
* `-F` : 输出所有函数名
* `-i` : 声明整数变量
* `-l` : 声明变量为小写字母
* `-p` : 查看变量信息
* `-r` : 声明只读变量
* `-u` : 声明变量为大写字母
* `-x` : 该变量输出为环境变量

## `readonly` 命令
`readonly`命令等同于 `declare -r`，用来声明只读变量，不能改变变量值，也不能 `unset` 变量

参数:
* `-f` : 声明的变量为函数名
* `-p` : 打印出所有的只读变量
* `-a` : 声明的变量为数组

## `let` 命令
`let` 命令声明变量时，可以直接执行算术表达式

`let` 命令的参数表达式如果包含空格，就需要使用引号

`let` 可以同时对多个变量赋值，赋值表达式之间要使用空格分隔
```sh
$ let foo=1+2
$ echo $foo
3

$ let "foo = 1 + 2"

$ let "v1 = 1" "v2 = v1++"
$ echo $v1,$v2
2,1
```
## 字符串操作
### 字符串长度
`${#varname}`
```sh
$ mypath=/home/cam/book/long.file.com
$ echo ${#mypath}
29
```
### 子字符串
`${varname:offset:length}`

这种语法不能直接操作字符串，只能通过变量来读取字符串，并且不会改变原始字符串。
```sh
$ count=frogfootman
$ echo ${count:4:4}
foot
$ echo ${count:4}
footman

$ foo="This string is long."
$ echo ${foo :-5}
long.
$ echo ${foo: -5:2}
lo
$ echo ${foo: -5:-2}
lon
```
### 改变大小写
* 转为大写
`${varname^^}`
* 转为小写
`${varname,,}`
```sh
$ foo=heLLo
$ echo ${foo^^}
HELLO
$ echo ${foo,,}
hello
```
### 搜索和替换
1. 字符串头部的模式匹配
   ```sh
   # 删除最短匹配（非贪婪匹配）
   ${varname#pattern}

   # 删除最长匹配（贪婪匹配）
   ${varname##pattern}
   ```
   如果匹配成功，就删除匹配的部分，返回剩下的部分。原始变量不会发生变化；如果匹配不成功，则返回原始字符串。
   ```sh
   $ mypath=/home/cam/book/long.file.name
   $ echo ${mypath#/*/}
   cam/book/long.file.name
   
   $ echo ${mypath##/*/}
   long.file.name
   
   $ phone="555-456-1414"
   $ echo ${phone#444}
   555-456-1414
   ```
   如果要将头部匹配的部分，替换成其他内容，采用下面的写法
   ```sh
   ${varname/#pattern/string}

   $ foo=JPG.JPG
   $ echo ${foo/#JPG/jpg}
   jpg.JPG
   ```

2. 字符串尾部的模式匹配
   ```sh
   # 删除最短匹配（非贪婪匹配）
   ${varname%pattern}
   
   # 删除最长匹配（贪婪匹配）
   ${varname%%pattern}
   ```
   上面两种语法会删除变量字符串结尾的匹配部分（将其替换为空），返回剩下的部分；如果不匹配，则返回原始字符串
   ```sh
   $ path=/home/cam/book/long.file.name
   $ echo ${path%/*}
   /home/cam/book
   $ echo ${path%%.*}
   /home/cam/book/long

   $ file=foo.png
   $ echo ${file%.png}.jpg
   foo.jpg
   ```
   如果要将尾部匹配的部分，替换成其他内容，采用下面的方法
   ```sh
   ${varname/%pattern/string}

   $ foo=JPG.JPG
   $ echo ${foo/%JPG/jpg}
   JPG.jpg
   ```

3. 字符串任意位置的模式匹配
   ```sh
   # 最长匹配（贪婪匹配）的那部分被 string 替换，但仅替换第一个匹配
   ${varname/pattern/string}

   # 最长匹配（贪婪匹配）的那部分被 string 替换，所有匹配都替换
   ${varname//pattern/string}
   ```
   **注意，上面两种语法都是最长匹配（贪婪匹配）下的替换**  
   
   如果省略了 `stirng` 的部分，那么相当于匹配的部分替换成空字符串，即删除匹配的部分
   ```sh
   $ path=/home/cam/foo/foo.name
   $ echo ${path/.*/}
   /home/cam/foo/foo

   $ echo ${path/foo/bar}
   /home/cam/bar/foo.name
   $ echo ${path//foo/bar}
   /home/cam/bar/bar.name
   ```

## 运算
### 算术运算
`((...))` 语法可以进行整数的算术运算，自动忽略内部的空格。

`((...))` 支持的算术运算：`+`, `-`, `*`, `/`, `%`, `++`, `--`, `**`
```sh
$ ((foo = 5+5))
$ echo $foo
10

# 这个语法不返回值，如果要读取算术运算的结果，在前面加上 $ 符号
$ echo $(( 2 + 2 ))
4

# 这个语法只能进行整数计算
$ echo $((1.5+2))
bash:语法错误

# ((...))里面使用字符串，bash会认为那是一个变量名。如果不存在同名变量，bash就会将其作为空值
$ echo $(( "hello" + 2 ))
2
# 将空值当作 0
$ echo $(("hello"*2))
0
```

### 数值的进制
* `0number` : 八进制
* `0xnumber` : 十六进制
* `base#number` : base进制
```sh
$ echo $((0xff))
256
$ echo $((2#1111))
15
```

### 位运算
`$((...))` 支持以下的二进制运算  
* `<<` : 左移运算
* `>>` : 右移运算
* `&` : 与运算
* `|` : 或运算
* `^` : 异或运算
* `~` : 非运算

### 逻辑运算
`$((...))` 支持以下的逻辑运算符
* `<` : 小于
* `>` : 大于
* `<=` : 小于等于
* `>=` : 大于等于
* `==` : 相等
* `!=` : 不相等
* `&&` : 逻辑与
* `||` : 逻辑或
* `!` :  逻辑非
* `expr1 ? expr2 : expr3` : 三元条件运算符

### 赋值运算
`$((...))` 可以执行赋值运算
* `=`
* `+=`
* `-=`
* `*=`
* `/=`
* `%=`
* `<<=`
* `>>=`
* `%=`
* `|=`
* `^=`

### 求值运算
`,` 在 `(())` 内部时求值运算符，执行前后两个表达式，并返回后一个表达式的值。
```sh
$ echo $((foo = 1 + 2, 3 * 4))
12
$ echo $foo
3
```

## expr 命令
`expr` 命令支持算术运算，可以不使用 `((...))` 语法  
`expr` 命令支持变量替换  
`expr` 命令不支持非整数参数  
```sh
$ expr 2+3
5

$ foo=3
$ expr $foo+2
5

$ expr 1.5+2
expr:非整数参数
```