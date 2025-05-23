const BasicGrammar = () => {
  /**语句
   * js执行单位为line（行），也就是一行一行地执行，一般情况下，每一行就是一个语句
   * 语句（statement）是为了完成某种任务而进行的操作，比如下面就是一行赋值语句
   */
  var a = 1 + 3;
  /**
   * 这条语句先用var命令，声明了变量a,然后将 1 + 3的结果赋值给变量啊
   * 1 + 3叫做表达式（expression），指一个为了得到返回值的计算式。语句和表达式的区
   * 别在于，前者主要为了进行某种操作，一般不需要返回值，后者则是为了得到返回值，一
   * 定返回一个值。凡是js语言中预期为值的地方，都可以使用表达式，比如，赋值语句的等号右边，预期是一个值，因此可以放置各种表达式。
   *语句以分号结尾，一个分号就表示一个语句结束，多个语句可以写在一行内
   */
  // var a = 1 + 3; var b = "abc";
  /**
   * 分号前面可以没有任何内容，js引擎将其视为空语句
   * ;;;;;;;;;
   * 上面的代码就表示几个空语句
   * 表达式不需要分号结尾，一旦表达式后面添加了分号，则js引擎就将表达式视为语句，这样会产生一些没有意义的语句
   */
  1 + 3;
  ("abc");
  /**
   * 上面两行语句只是单纯地产生一个值，并没有任何实际意义
   */

  /**变量
   * 变量是对值的具名引用。变量就是为值起名，然后引用这个名字，就等同于引用了这个值，变量的名字就是变量名
   */
  var a = 1;
  /**
   * 上面的代码先声明变量a，然后在变量a与数值1之间建立引用关系，称为将数值1赋值给变量a，以后，引用变量a就会得到数值1，
   * 最前面的var，是变量声明命令，他表示通知解释引擎，要创建一个变量a
   * 注意，js的变量名区分大小写，A和a是两个不同的变量
   * 变量的声明和赋值，是分开的两个步骤，上面的代码将他们合并在了一起，实际的步骤是下面这样
   * var a;
   * a = 1;
   * 如果只是声明变量而没有赋值，则该变量的值是undefined。undefined是一个特殊的值，表示无定义
   * var a;
   * a // undefined
   * 如果变量赋值的时候，忘了写var命令，这条语句也是有效的
   * var a = 1;
   * 基本等同
   * a = 1;
   * 但是不写var的做法，不利于表达意图，而且容易不知不觉地创建全局变量，所以建议总是使用var命令声明变量
   * 如果一个变量没有声明就直接使用，js会报错，告诉你变量为定义
   * x
   * ReferenceErrror: x is not defined
   * 上面代码直接使用变量x，系统就报错，告诉你变量x没有声明
   * 可以在同一条var命令中声明多个变量
   * var a,b;
   * js是一种动态类型语言，也就是说，变量的类型没有限制，变量可以随时更改类型。
   * var a = 1;
   * a = 'hello'
   * 上面代码中，变量a起先被赋值为一个数值，后来又被重新赋值为一个字符串，第二次赋值的时候，因为变量a已经存在，所以不需要使用var命令
   * 如果使用var重新声明一个已经存在的变量，是无效的
   * var x = 1
   * var x;
   * x // 1
   * 上面代码中，变量x声明了两次，第二次声明是无效的。
   * 但是，如果第二次声明的时候还进行了赋值，则会覆盖掉前面的值。
   * var x = 1;
   * var x = 2;
   *
   * 等同于
   *
   * var x = 1;
   * var x;
   * x = 2;
   */

  /**变量提升
   * js引擎的工作方式是，先解析代码，获取所有被声明的变量，然后在一行一行地运行。
   * 这造成的结果。就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升
   */
  console.log(a);
  var a = 1;
  /**
   * 上面代码首先使用console.log方法，在控制台显示变量a的值，这时变量a还没有声明和赋值，所以这是一种错误的做法，但是实际上不会报错。
   * 因为变量提升，真正运行的是下面的代码
   */
  var a;
  console.log(a);
  a = 1;
  /**
   * 最后的结果是现实undefined，表示变量a已声明，但还未赋值
   */

  /**标识符
   * 标识符（identifier）指的是用来识别各种值的合法名称，最常见的标识符就是变量名，以及后面要提到的函数名。
   * js语言的标识符对大小写敏感，所以A和a是两个不同的标识符
   *
   * 标识符有一套命名规则，不符合规则的就是非法标识符，js引擎遇到非法标识符就会报错。
   * 简单说，标识符命名规则如下。
   * 第一个字符，可以是任意Unicode字母（包括英文字母和其他语言的字母），以及美元符号（$）和下划线_。
   * 第二个字符及后面的字符，除了Unicode字母，美元符号和下划线，还可以用数字0-9.
   * 下面这些都是合法的标识符
   * arg0
   * _tmp
   * $elem
   * n
   * 下面这些则是不合法的标识符。
   * 1a
   * 23
   * ***
   * a+b
   * -d
   * 中文是合法的标识符，可以用作变量名
   */
  var 临时变量 = 1;
  /**
   * js有一些保留字，不能用作标识符：arguments break case catch class const continue debugger default delete do else enum eval export
   * extends false finally for function if implements import in instanceof interface let new null package private protected public
   * return static super switch this throw true try typeof var void while with yield
   */

  /**注释
   * 源码中被js引擎忽略的部门就叫做注释，它的作用是对代码进行解释。js提供两种注释的写法：一种是单行注释，用 // 起头；另一种是多行注释，放在/星号/之间
   * 此外，由于历史上js可以兼容HTML代码的注释，所以<!--和-->也被视为合法的单行注释
   * x = 1; <!-- x = 2;
   * --> x = 3;
   * 上面代码中，只有x = 1会执行，其他部分都被注释掉了
   * 需要注意的是，-->只有在行首，才会被当成单行注释，否则会当作正常的运算
   * function countdown(n) {
   * while(n --> 0) console.log(n);
   * }
   * 上面代码中，n --> 0实际上会当作n-- >0，因此输出210
   * 2
   * 1
   * 0
   */

  /**区块
   * js使用大括号，将多个相关的语句结合在一起称为区块，对于var命令来说，js的区块不构成单独的作用域
   * {
   * var a = 1;
   * }
   * a // 1
   * 上面代码在区块内部，使用var命令声明并赋值了变量a，然后在区块外部，变量a依然有效，区块对于var命令不构成单独的作用域
   * 与不使用区块的情况没有任何区别，在js语言中，单独使用区块并不常见，区块往往用来构成其他更复杂的语法结构，比如for if while function
   */

  /**条件语句
   * js提供if结构和switch结构，完成条件判断，即只有满足预设的条件，才会执行相应的语句
   */

  /**if结构
   * if结构先判断一个表达式的布尔值，然后根据布尔值的真伪，执行不同的语句。所谓布尔值，指的是js的两个特殊值，true表示真，false表示伪
   * if(布尔值)
   * 语句；
   * // 或者
   * if(布尔值)语句；
   * 上面是if结构的基本形式。需要注意的是，布尔值往往有一个条件表达式产生的，必须放在圆括号中，表示对表达式求值。
   * 如果表达式的求值结果为true，就执行紧跟在后面的语句；如果结果为false，则跳过紧跟在后面的语句。
   * if(m ===3)
   * m = m + 1
   * 上面代码表示，只有在m等于3时，才会将其值加上1
   * 这种写法要求条件表达式后面只能是一个语句。如果想执行多个语句，必须在if的条件判断之后，加上大括号，标识代码块（多个语句合并成一个语句）
   * if(m === 3) {
   * m += 1
   * }
   * 建议总是在if语句中使用大括号，因为这样方便插入语句。
   * 注意，if后面的表达式之中，不要混淆赋值表达式（=），严格相等运算符（===）和相等运算符（==）。尤其是赋值表达式不具备有比较作用
   * var x = 1;
   * var y = 2;
   * if(x = y) {
   * console.log(x)
   * }
   * // 2
   * 上面代码的原意是，当x等于y的时候，才执行相关语句。但是，不小心将严格相等运算符写成赋值表达式，结果变成了将y复制给变量x，在判断变量x的值（等于2）的布尔值（结果为true）
   * 这种错误可以正常生产一个布尔值，因而不会报错，为了避免这种情况，有些开发者习惯将常量写在运算符的左边，这样的话，一旦不小心将相等运算符写成赋值运算符，就会报错，因为常量不能被赋值
   * if(x = 2) // 不报错
   * if(2 = x) // 报错
   */

  /**if...else结构
   *if代码块后面，还可以跟一个else代码块，表示不满足条件时，所要执行的代码。
   *if(m ===3) {}else{}
   *上面代码判断变量m是否等于3，如果等于就执行if代码块，否则执行else代码块。对同一个变量进行多次判断时，多个if...else语句可以连写在一起。
   *if(m === 0){}else if(m === 1){}else if(m === 2)else {}
   *else代码块总是与自己最近的那个if语句配对
   *
   * var m = 1;
   * var n = 2;
   * if(m !== 1)
   * if(n === 2) console.log('hello')
   * else console.log('word')
   * 上面代码不会有任何输出，else代码块不会得到执行，因为它跟着的是最近的那个if语句，相当于下面这样
   * if(n !== 1) {
   * if(n === 2) {
   * console.log('hello')
   * }else{
   * console.log('word')
   * }
   * }
   * 如果想让else代码块跟随着最上面的那个if语句，就要改变大括号的位置
   * if(m !== 1) {
   * if(n === 2) {
   * console.log('hello')
   * }
   * }else {
   * console.log('world')
   * }
   */

  /**Switch结构
   * 多个if...else连在一起使用的时候，可以转为使用更方便的switch结构
   * switch(fruit) {
   * case "banana":
   * ...
   * break;
   * case "apple":
   * ....
   * break；
   * default:
   * ...
   * }
   * 上面代码根据变量fruit的值，选择执行相应的case。如果所有case都不符合，则执行最后的default部分。需要注意的是，每个case代码内部的break语句不能少，否则会接下去执行下一个case代码块，而不是跳出switch结构。
   * var x = 1;
   * switch(x) {
   * case 1:
   * console.log('x 等于1');
   * case 2:
   * console.log('x 等于2');
   * default:
   * console.log('x 等于其他值');
   * }
   * // x 等于1
   * // x 等于2
   * // x 等于其他值
   * 上面代码中，case代码块之中没有break语句，导致不会跳出switch结构，而会一直执行下去。正确的写法像下面这样。
   * switch(x) {
   * case 1:
   * console.log('x 等于1')
   * break;
   * case 2:
   * console.log(‘x 等于2')
   * break;
   * default:
   * console.log('x 等于其他值')
   * }
   * switch语句部分和case语句部分，都可以使用表达式。
   * switch(1+3){
   * case 2+2:
   * fn();
   * break;
   * default:
   * neverHappens();
   * }
   * 上面代码的default部分，是永远不会执行到的。
   * 需要注意的是，switch语句后面的表达式，与case语句后面的表达式比较运行结果时，采用的是严格相等运算符（===），而不是相等运算符（==），这意味着比较时不会发生类型转换。
   * var x = 1;
   * switch(x) {
   * case true:
   * console.log('x 发生类型转换');
   * break;
   * default:
   * console.log('x 没有发生类型转换')
   * }
   * x没有发生类型转换
   * 上面代码中，由于变量x没有发生类型转换，所以不会执行case true的情况。这表明，switch语句内部采用的是严格相等运算符
   */

  /**三元运算符？
   * (条件) ? 表达式1 : 表达式2
   * 上面代码中，如果条件为true，则返回表达式1的结果，否则返回表达式2的值。
   * var even = (n % 2 === 0) ? true : false;
   * 上面代码中，如果n可以被2整除，则even等于true，否则等于false。它等同于下面的形式
   * var even
   * if(n%2 ===0) {
   * even = true
   * }else {
   * even = false
   * }
   * 这个三元运算符可以被视为if...else的简写形式，因此可以用于多种场合。
   * var myVar
   * console.log(maVar ? 'myVar has a value' : 'myVar does not have a value')
   * // myVar does not have a value
   * 上面代码利用三元运算符，输出相应的提示
   * var msg = '数字' + n + '是' + (n%2 === 0 ? '偶数': '奇数')
   * 上面代码利用三元运算符，在字符串之中插入不同的代码
   */

  /**循环语句
   * 循环语句用于重复执行某个操作，它有多种形式。
   * while循环
   * while(条件)
   * 语句;
   * 或者
   * while(条件){语句;}
   * 下面是while语句的一个例子。
   * var i = 0;
   * while(i<100) {
   * console.log('i 当前为: ' + i)
   * }
   * 上面的代码将循环100次，直到i等于100为止。
   * 下面的例子是一个无限循环，因为循环条件总是为true
   * while(true) {
   * console.log('hello world');
   * }
   *
   *
   * for循环
   * for循环语句是循环命令的另一种形式，可以指定循环的起点，终点和终止条件。它的格式如下
   * for(初始化表达式;条件;递增表达式)
   * 语句
   * 或者
   * for(初始化表达式;条件;递增表达式) {
   * 语句
   * }
   * for语句后面的括号里面，有三个表达式。
   * 初始化表达式，确定循环变量的初始值，只在循环开始时执行一次
   * 条件表达式，每轮循环开始时，都要执行这个条件表达式，只有值为真，才继续进行循环
   * 递增表达式，每轮循环的最后一个操作，通常用来递增循环变量
   * 下面是一个例子
   * var x = 3
   * for(var i = 0; i < x; i++) {
   * console.log(i)
   * }
   * // 0
   * // 1
   * // 2
   * 上面代码中，初始化表达式是var i = 0；即初始化一个变量i；测试表达式是i < x,即只要i小于x，就会执行循环；递增表达式是i++，即每次循环结束后，i增大1.
   * 所有for循环，都可以改写成while循环，上面的例子改为while循环，代码如下
   * var x = 3;
   * var i = 0;
   * while(i < x) {
   * console.log(i);
   * i++;
   * }
   * for语句的三个部分 初始化表达式 条件表达式 递增表达式，可以省略任何一个，也可以全部省略
   * for(;;) {
   * console.log(‘hello world’)
   * }
   * 上面代码省略了for语句表达式的三个部分，结果就是导致一个无限循环
   *
   *
   * do...while循环
   * do...while循环与while循环类似，唯一的区别就是先运行一次循环体，然后判断循环条件
   * do
   * 语句
   * 或者
   * do{
   * 语句
   * }while(条件);
   * 不管是否为真，do...while循环至少运行一次，这是这种结构最大的特点。另外，while语句后面的分号注意不要省略
   * 下面是一个例子
   * var x = 3;
   * var i = 0;
   * do{
   * console.log(i)
   * i++
   * }while(i < x);
   *
   * break语句和continue语句
   * break语句和continue语句都具有跳转作用，可以让代码不按既有的顺序执行。
   * break语句用于跳出代码块或循环。
   * var i = 0;
   * while(i < 100) {
   * console.log('i 当前为：' + i);
   * i++;
   * if(i === 10) break;
   * }
   * 上面代码只会执行10次循环，一旦i等于10，就会跳出循环。
   * for循环也可以使用break语句跳出循环。
   * for(var i = 0; i < 5; i++) {
   * console.log(i);
   * if(i === 3) break;
   * }
   * 上面代码执行i等于3，就会跳出循环。
   *
   * continue语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。
   * var i = 0;
   * while(i < 100) {
   * i++;
   * if(i % 2 === 0) continue;
   * console.log('i 当前为：' + i)
   * }
   * 上面代码只有在 i 为奇数时，才会输出i的值。如果i为偶数，则直接进入下一轮循环。
   * 如果存在多重循环，不带参数的break语句和continue语句都只针对最内层循环
   */

  /**标签Label
   * js语言允许，语句的前面有标签，相当于定位符，用于跳转到程序的任意位置，标签的格式如下。
   * label:
   * 语句
   * 标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句
   * 标签通常与break语句和continue语句配合使用，跳出特定的循环。
   * top:
   * for(var i = 0; i < 3; i++) {
   * for(var j = 0; j < 3; j++) {
   * if(i === 1 && j === 3) break top;
   * console.log('i=' + i + ', j=' + j)
   * }
   * }
   * // i= 0， j = 0;
   * // i = 0, j = 1;
   * // i = 0, j = 2;
   * // i = 1,j = 0;
   * 上面代码为一个双重循环区块，break命令后面加上了top标签（注意，top不用加引号）满足条件时，直接跳出双循环。如果break语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。
   * 标签也可以用于跳出代码块
   * foo: {
   * console.log(1)
   * break foo;
   * console.log('本行不会输出');
   * }
   * console.log(2);
   * // 1
   * // 2
   * 上面代码执行到break foo，就会跳出区块。
   * continue语句也可以与标签配合使用。
   * top:
   * for(var i = 0; i < 3; i++) {
   * for(var j = 0; j < 3; j++) {
   * if(i === 1 && j ===1) continue top;
   * console.log('i=' + i + ', j=' + j);
   * }
   * }
   * // i = 0, j = 0
   * // i = 0, j = 1
   * // i = 0, j = 2
   * // i = 1, j = 0
   * // i = 2, j = 0
   * // i = 2, j = 1
   * // i = 2, j = 2
   * 上面代码中，continue命令后面有一个标签名，满足条件时，会跳过当前循环，直接进入下一轮外层循环。如果continue语句后面不使用标签，则只能进入下一轮的内层循环。
   */
  return <div>BasicGrammar</div>;
};
export default BasicGrammar;
