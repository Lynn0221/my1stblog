# this 指向 (call, apply, bind)

一直不懂 this 的指向问题，直到我发现了这篇文章！！！

我为了自己理解方便，有做小小的改动。

下面是原文地址：

> 原文作者：[战场小宝](https://juejin.cn/user/4424090519078430)  
>原文地址：[《2w字大章 38道面试题》彻底理清JS中this指向问题](https://juejin.cn/post/7019470820057546766)

## Start

当一个函数调用时，会创建一个执行上下文，这个上下文包括函数调用的一些信息，`this` 就指向这个执行上下文。

::: tips
`this` 不是静态的，也并不是在编写的时候绑定的，而是在**运行时**绑定的。它的绑定和函数声明的位置没有关系，**只取决于函数调用的方式。**
:::

## 默认绑定

默认绑定通常是指函数独立调用，不涉及其他绑定规则。

非严格模式下，`this` 指向 `window`;

在严格模式下，`this` 指向 `undefined`。

1. 非严格模式
   ```js
   var foo = 123;
   function print(){
     this.foo = 234
     console.log(this);  // window
     console.log(foo);   // 234
   }

   print();
   ```
2. 严格模式
   ```js
   "use strict"

   var foo = 123;
   function print(){
     console.log(this); // undefined
     console.log(window.foo); // 123
     console.log(this.foo); // Uncaught TypeError: Cannot read properties of undefined (reading 'foo')
   }
   
   console.log(this); //window
   print();
   ```
   ::: warning
    开启严格模式后，函数内部 `this` 指向 `undefined`， 但全局对象 `window` 不会受影响。
   :::

3. let/const
   ```js
   let a = 1;
   var b = 2;
   const c = 3;

   function print(){
     console.log(this.a); // undefined
     console.log(this.b); // 2
     console.log(this.c); // undefined
   } 

   print();
   console.log(this.a); // undefined
   ```

   :::tips
   `let`, `const` 定义的变量存在暂时性死区，而且不会挂载到 `window` 对象上，因此 `print` 中是无法获取到`a`和`b`的。
   :::

4. 对象内执行
   ```js
   var a = 1;
   function foo(){
     console.log(this.a);
   }

   const obj = {
     a: 10,
     bar(){
       foo();
     }
   }

   obj.bar(); // 1
   ```
   `foo` 虽然在 `obj` 的 `bar` 函数中，但 `foo` 函数仍然是独立运行的，`foo` 中的 `this` 依旧指向 `window` 对象。

5. 函数内执行
   ```js
   var a = 1;
   function outer(){
     var a = 2;
     function inner(){
       console.log(this.a);
     }
     inner();
   }

   outer(); // 1
   ```
   `inner` 函数独立运行（类似于 < 4. 对象内执行 >）。这不是闭包问题！

6. 自执行函数
   ```js
   var a = 1;
    (function () {
      var a = 10;
      console.log(this); // window
      console.log(this.a); // 1
    }());

    function bar() {
      var b = 2;
      (function () {
        console.log(this);  // window 
        console.log(this.b); // 3
      }())
    }

    var b = 3;
    bar();
   ```
   默认情况下，自执行函数的 `this` 指向 `window`

## 隐式绑定

函数的调用是在某个对象上触发的，即调用位置存在上下文对象，通俗点说就是 `xxx.func()` 这种调用模式。

此时 `func` 的 `this` 指向 `xxx`，但如果存在链式调用，`xxx.yyy.zzz.func()`，记住一个原则：**this 永远指向最后调用它的那个对象。**

1. 隐式绑定
   ```js
   var a = 1;
   function foo(){
     console.log(this.a);
   }

   var obj = { a: 2, foo };
   foo(); // 1
   obj.foo(); // 2
   ```
   `foo()` 默认绑定; `obj.foo()` 隐式绑定
   `obj` 是用过 `var` 定义的，`obj` 会挂载到 `window`之上的。  
   `obj.foo()` 就相当于 `window.obj.foo()`（也算是一种链式调用），这也印证了 **`this` 永远指向最后调用它的哪个对象** 规则。

2. 对象链式调用
   ```js
   var obj = {
     a: 1,
     obj2: {
       a: 2,
       foo(){
         console.log(this.a);
       }
     }
   }

   obj1.obj2.foo(); // 2
   ```

### 隐式绑定丢失

隐式绑定一般会有两种常见的丢失：
* 使用另一个变量作为函数别名，之后使用别名执行函数
* 将函数作为参数传递时会被隐式赋值
  
隐式绑定丢失之后，`this` 的指向会启用默认绑定。

1. 取函数别名
   ```js
   var a = 1;
   var obj = {
     a: 2,
     foo(){
       console.log(this.a);
     }
   }

   var foo = obj.foo;
   obj.foo(); // 2
   foo(); // 1
   ```
   上面将 `obj.foo` 赋值给 `foo` ，就是将 `foo` 也指向了 `obj.foo` 所指向的堆内存，此后再执行 `foo`，相当于直接执行的堆内存的函数，与 `obj` 无关，`foo` 为默认绑定。

   :::waring
   不要把这里理解成 `window.foo` 执行，如果 `foo` 为 `let / const` 定义，`foo` 不会挂载到 `window`上，但不会影响最后的打印结果。
   :::

   ```js
   var obj = {
     a: 1,
     foo(){
       console.log(this.a);
     }
   };

   var a = 2;
   var foo = obj.foo;
   var obj2 = {
     a: 3,
     foo: obj.foo
   }

   obj.foo(); // 1
   foo(); //2
   obj2.foo(); // 3
   ```

   `obj2.foo` 指向了 `obj.foo` 的堆内存，此后执行与 `obj` 无关（除非使用 `apply/call` 改变 `this` 指向）

2. 函数作为参数传递
   ```js
   function foo(){
     console.log(this.a);
   }

   function doFoo(fn){
     console.log(this);
     fn();
   }

   var obj = { a: 1, foo };
   var a = 2;
   doFoo(obj.foo); // window 2
   ```
   `obj.foo` 作为实参，在预编译时将其值赋值给形参 `fn`，是将 `obj.foo` 指向的地址赋给了 `fn`, 此后 `fn` 执行不会与 `obj` 产生任何关系。`fn` 为默认绑定。

   ```js
   function foo(){
     console.log(this.a);   // 2
   }

   function doFoo(fn){
     console.log(this);    // { a: 3, doFoo}
     console.log(this.a);   // 3
     fn();
   }
   var obj = { a: 1, foo };
   var a = 2;
   var obj2 = { a: 3, doFoo };
   obj2.doFoo(obj.foo); 
   ```
   `console.log(this)` : `obj2.doFoo` 符合 `xxx.fn` 格式，`doFoo` 为隐式绑定 , `this` 为 `obj2`
   
   `fn()` 没有于 `obj2` 产生联系，默认绑定。
   
3. 回调函数
   ```js
   var name = "liyuanfang";

    function introduce() {
      console.log(`Hello, My name is ${this.name}.`);
    }

    const Tom = {
      name: "Tom",
      introduce: function () {
        setTimeout(function () {
          console.log(this);
          console.log(`Hello, My name is ${this.name}.`);
        })
      }
    }

    const Mary = {
      name: "Mary",
      introduce
    }

    const Lisa = {
      name: "Lisa",
      introduce
    }

    Tom.introduce();  // window    Hello, My name is liyuanfang.
    setTimeout(Mary.introduce, 100);  // Hello, My name is liyuanfang.
    setTimeout(function () { Lisa.introduce() }, 200);   // Hello, My name is Lisa.
   ```

   * `Tom.introduce()` 执行，`console` 位于 `setTimeout` 的回调函数中，回调函数的 `this` 指向 `window`
   * `Mary.introduce` 作为 `setTimeout` 的函数参数，会发生隐式绑定丢失，`this` 为默认绑定
   * `Lise.introduce()` 执行虽然位于 `setTimeout` 的回调函数中，但保持 `xxx.fn()` 模式，`this` 为隐式绑定，指向 `Lisa` 对象

   ::: tips
   如果我们想在 `setTimeout` 和 `setInterval` 中使用外界的 `this`，需要提前存储一下，避免 `this` 丢失。
   ```js
   const Tom = {
     name: "Tom",
     introduce: function(){
       _self = this; // this 指向 Tom 这个对象
       setTimeout(function(){
         console.log(`Hello, My name is ${_self.name}.`);
       })
     }
   }

   Tom.introduce(); // Hello, My name is Tom.
   ```
   :::
   
4. 综合练习
   ```js
   var name = "javascript";

    let obj = {
      name: "obj",
      A() {
        this.name += "this";
        console.log(this.name);
      },
      B(f) {
        this.name += "this";
        f();
      },
      C() {
        setTimeout(function () {
          console.log(this.name);
        }, 1000)
      }
    }

    let a = obj.A;
    a();   // javascriptthis 函数别名
    obj.B(function () {
      console.log(this.name);
    });    // javascriptthis  参数传递
    obj.C();    // javascriptthis（最后一个输出）  回调
    console.log(name);   // javascriptthis  默认绑定
   ```

## 显示绑定

通过`apply`, `call`, `bind` 等方法，强行改变 `this` 指向。

上面的方法虽然都可以改变 `this` 指向，但使用起来略有差别：
* `call()`, `apply()` 函数会立即执行
* `bind()` 函数会返回新函数，不会立即执行函数
* `call()`, `apply()` 的区别在于 `call` 接收若干个参数，`apply` 接收数组作为参数。

1. 三种调用方式比较
  ```js
  function foo(){
    console.log(this.a);
  }

  var obj = { a: 1 };
  var a = 2;

  foo();  // 2
  foo.call(obj);   // 1
  foo.apply(obj);  // 1
  foo.bind(obj); 
  ```
  foo.bind(obj) 不会立即执行函数，没有返回值。要想返回值，可以像一下方式执行：

  ```js
  let foo2 = foo.bind(obj);
  foo2();  // 1
  ```

2. 隐式绑定丢失
  
  下面这段代码是隐式绑定丢失中的一个例子，让我们修正它的 `this` 指向。
  ```js
  function foo(){
    console.log(this.a);
  }

  function doFoo(fn){
    console.log(this);
    fn();
  }

  var obj = { a: 1, foo };
  var a = 2;
  doFoo(obj.foo); // window 2
  ```

  首先，修改 `doFoo` 的 `this` 指向，指向 `obj`。

  而后，将 `fn` 的 `this` 指向修改为 `this`，因为上一步操作，`doFoo` 的 `this` 已经指向了 `obj`

  ```js
  function foo(){
    console.log(this.a); // 1
  }

  function doFoo(fn){
    console.log(this);    // { a: 1, foo }
    // 修改 fn 的 this 指向
    fn.call(this);
  }

  var obj = { a: 1, foo };
  var a = 2;
  // 修改 doFoo 的 this 指向
  doFoo.call(obj, obj.foo);
  ```

3. 回调函数与call
  ```js
  var obj = { a: 1 };

  var obj2 = {
    a: 2,
    bar: function(){
      console.log(this.a); // 2
    },
    foo: function(){
      setTimeout((function(){
        console.log(this);  // obj
        console.log(this.a);  // 1
      }).call(obj), 0)
    }
  }

  var a = 3;
  obj2.bar();    
  obj2.foo();   
  ```
  `setTimeout`的语法为 `setTimeout(fn, ms)`。使用 `call` 改变回调函数 `fn` 的 `this` 指向。

4. 注意 call 的位置 
  ```js
  function foo(){
    console.log(this.a);
  }

  var obj = { a: 1 };
  var a = 2;

  foo();    // 2
  foo.call(obj);  // 1
  foo().call(obj); // 2  Uncaught TypeError: Cannot read properties of undefined (reading 'call')
  ```
  `foo().call(obj)`：先执行 `foo()` 输出 `1`。对 `foo()` 执行的返回值执行 `call`，foo的返回值为 `undefined`，执行 `call()` 会报错。 

  修改上面的代码
  ```js
  function foo(){
    console.log(this.a);
    return function(){
      console.log(this.a);
    }
  }

  var obj = { a: 1 };
  var a = 2;

  foo();    // 2
  foo.call(obj);  // 1
  foo().call(obj); // 2  1
  ```
  `foo().call(obj)`：先执行 `foo()` 输出 `1`。对 `foo()` 执行的返回值执行 `call`，foo的返回值函数，执行 `call()` ，将 `this` 指向 `obj`, 打印 `1`。

5. 使用bind
   将上面的 `call` 全部替换成 `bind`，输出会有什么变化。
  ```js
  function foo(){
    console.log(this.a);
    return function(){
      console.log(this.a);
    }
  }

  var obj = { a: 1 };
  var a = 2;

  foo();    // 2
  foo.bind(obj); 
  foo().bind(obj); // 2
  ```
  `foo.bind(obj)`: 返回新函数，不会执行函数，无输出。  

  `foo().bind(obj)`: 首先执行 `foo()` ，打印 `2`，对`foo()`的返回值使用 `bind` 将 `this` 指向 `obj`，返回新的函数，不会执行函数，无输出。

6. 外层this和内层this
  ```js
  function foo(){
    console.log(this.a);
    return function(){
      console.log(this.a);
    }
  }

  var obj = { a: 1 };
  var a = 2;
  foo.call(obj)();  // 1 2
  ```
  `foo.call(obj)`: 第一层函数 `foo` 通过 `call` 将 `this` 指向 `obj` ，打印 `1`；第二层函数为匿名函数，默认绑定，返回 `2`。

7. 对象中的call
  ```js
  var obj = {
    a: "obj",
    foo: function(){
      console.log(`foo: ${this.a}`);
      return function(){
        console.log(`inner: ${this.a}`);
      }
    }
  }

  var a = "window";
  var obj2 = { a: "obj2" };

  obj.foo()();  // foo: obj   inner: window
  obj.foo.call(obj2)(); // foo: obj2  inner: window
  obj.foo().call(obj2); // foo: obj  inner: obj2
  ```
  `obj.foo()()`: 第一层 `obj.foo()` 为隐式绑定，打印 `obj`; 第二层 `obj.foo()` 的返回值为匿名函数，默认绑定，打印 `window`  

  `obj.foo.call(obj2)()`: 第一层 `obj.foo.call(obj2)` 中 `this` 指向 `obj2`，打印 `obj2`; 第二层 `obj.foo.call(obj2)` 的返回值为匿名函数，默认绑定，打印 `window`  

  `obj.foo().call(obj2)`: 第一层 `obj.foo()` 为隐式绑定，打印 `obj`; 第二层 `obj.foo()` 的返回值为匿名函数,使用 `call` 将 `this` 指向 `obj2`，打印 `obj2`

8. 带参数的call
  ```js
  var obj = {
    a: 1,
    foo: function(b){
      b = b || this.a;
      return function(c){
        console.log(this.a + b + c);
      }
    }
  }

  var a = 2;
  var obj2 = { a: 3 };

  obj.foo(a).call(obj2, 1);  // 6 = 3 + 2 + 1 
  obj.foo.call(obj2)(1);  // 6 = 2 + 3 +1
  ```
  * `obj.foo(a).call(obj2, 1)`:   
    1. 先执行 `obj.foo(a)`, 传入的参数是 `window` 下的 `a`，因此 `b = 2`
    2. 返回匿名函数，执行 `匿名函数.call(obj2, 1)`, `this` 指向 `obj2`， 传入参数 `1`
    3. `this.a = 3`, `b = 2`, `c = 1`, 最终结果 输出 `6`
  
  * `obj.foo.call(obj2)(1)`:
    1. 先执行 `obj.foo.call(obj2)`，`this` 指向 `obj2` ，为传入参数，因此 `b = this.a = 3`
    2. 返回匿名函数，执行匿名函数，传入参数 `1`，默认绑定，因此 `this.a = 2`, `c = 1`
    3. `this.a = 2`, `b = 3`, `c = 1`, 最终结果 输出 `6`


## new 绑定

## ES6 箭头函数绑定

## 总结

## 参考

* [https://juejin.cn/post/7019108835197452301](https://juejin.cn/post/7019108835197452301)

* [https://blog.csdn.net/qq_32036091/article/details/120608863](https://blog.csdn.net/qq_32036091/article/details/120608863)

* [https://blog.csdn.net/qq_32036091/article/details/120589645](https://blog.csdn.net/qq_32036091/article/details/120589645)

* [https://blog.csdn.net/qq_32036091/article/details/120297142](https://blog.csdn.net/qq_32036091/article/details/120297142)

* [https://blog.csdn.net/qq_32036091/article/details/120518027](https://blog.csdn.net/qq_32036091/article/details/120518027)


* [https://blog.csdn.net/qq_32036091/article/details/120618424](https://blog.csdn.net/qq_32036091/article/details/120618424)


* [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

* [https://blog.csdn.net/qq_32036091/article/details/120297142](https://blog.csdn.net/qq_32036091/article/details/120297142)

* [https://juejin.cn/post/6844904083707396109#heading-14](https://juejin.cn/post/6844904083707396109#heading-14)

* [https://juejin.cn/post/6844903805587619854](https://juejin.cn/post/6844903805587619854)
