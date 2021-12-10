# JS异步编程 —— Promise A+规范

[原文地址 :  https://promisesaplus.com/](https://promisesaplus.com/)

`promise` 代表一个异步操作的最终结果。其主要方式是通过 `then` 方法。该方法注册两个回调函数，分别接收 `Promise` 的*成功的结果*或*失败的原因*作为参数。


## 术语
* `promise` 是一个符合本规范的 **对象** 或 **函数**
* `thenable` 是定义了 `then` 方法的 **对象** 或 **函数**
* `value` 是任何`javascript`的合法值，包括`undefined`，`thenable`，`promise`
* `exception` 是使用 `throw` 语句抛出的值
* `reason` 是 `promise` 失败的原因

## 要求

### Promise 状态

**`promise`只有三种状态：`pending`，`fulfilled`，`rejected`**

1. state == "pending" 时
   可以转换成 `fulfilled` 或 `rejected` 其中任意**一种**状态。
2. state == "fulfilled" 时
   1. 状态不可变
   2. 必须有`value`，且不可改变
3. state == "rejected" 时
   1. 状态不可变
   2. 必须有`reason`，且不可改变

::: warning 注意
Here, “must not change” means immutable identity (i.e. ===), but does not imply deep immutability.
:::

### then 方法

`promise` 必须提供 `then` 方法，可以接收`value` 和 `reason`

`then`函数 接收两个参数：  
`promise.then(onFulfilled, onRejected)`

1. `onFulfilled` 和 `onRejected` 是可选参数
   1. 如果 `onFulfilled` 不是函数，被忽略
   2. 如果 `onRejected` 不是函数，被忽略
2. 如果 `onFulfilled` 是一个 **函数**
   1. 必须在 `promise` 状态为 `fulfilled` 时被调用，且`value` 作为 `onFulfilled` 的第一个参数
   2. 必须在 `promise` 状态为 `fulfilled` 时被调用
   3. 最多只能调用一次
3. 如果 `onRejected`  是一个 **函数**
   1. 必须在 `promise` 状态为 `rejected` 时被调用， 且 `reason` 作为 `onRejected`的第一个参数
   2. 必须在 `promise` 状态为 `rejected` 时被调用
   3. 最多只能调用一次
4. 在执行上下文栈中只包含平台代码之前，`onFulfilled` 或 `onRejected` 一定不能被调用 
5. `onFulfilled` 和 `onRejected` 一定被作为函数调用(没有this值)   
   *补充说明：在非严格模式下，this 为 global；严格模式下，this 为 undefined*
6. `promise` 可以多次调用其 `then` 方法
   1. 当 `promise` 状态为 `fulfilled`，`onFulfilled` 回调必须按照 `then` 的调用顺序执行。
   2. 当 `promise` 状态为 `rejected`， `onRejected` 回调必须按照 `then` 的调用顺序执行。
7. `then` 的返回值必须为 `promise` 
   `promise2 = promise1.then(onFulfilled, onRejected)`
   1. 如果 `onFulfilled` 或 `onRejected` 返回一个`value`（假设为 `x`），执行 promise 处理程序 `[[Resolve]](promise2, x)`
   2. 如果 `onFulfilled` 或 `onRejected` 抛出一个 `exception`（假设为 `e`），`promise2` 必须捕获异常且接收`e`作为`reason`
   3. 如果 `onFulfilled` 不是函数且 `promise1` 状态为 `fulfilled`，`promise2` 必须接收 `promise1` 相同的`value`
   4. 如果 `onRejceted` 不是函数且 `promise1` 状态为 `rejected`，`promise2` 必须接收 `promise1` 相同的`reason`



### promise 处理程序
promise 处理程序是一个表现形式为 `[[Resolve]](promise, x)` 的抽象处理操作。如果 `x` 时 `thenable` 类型，它会尝试生成一个 `promise` 处理 `x`,否则它将直接 `resolve x`

只要 `then` 方法符合Promise A+ 规范，那么对 thenables 处理就允许实现可互操作（链式调用）

执行 `[[Resolve]](promise, x)` 的步骤如下：
1. 如果`promise` 和 `x` 指向同一个引用，`TypeError`作为`reason`，执行`reject`
2. 如果`x`是`promise`实例
   1. 如果 `x` 是 `pending` 状态，等待知道状态变成 `fulfilled` 或者 `rejected`
   2. 如果 `x` 是 `fulfilled` 状态，`value`作为参数执行 `resolve`
   3. 如果 `x` 是 `rejected`状态，`reason`作为参数执行 `reject`
3. 如果 `x` 是一个函数或者对象
   1. 把 `x.then` 赋值给 `then`
   2. 如果在上一步捕获到异常，则执行`reject`
   3. 如果 `then` 是一个函数，将 `then` 的 `this` 指向 `x`,第一个参数传 `resolvePromise` ，第二个参数传 `rejectPromise`
      1. 如果 `resolvePromise` 被调用并接收一个参数`y`，执行 `[[Resolve]](promise, y)`
      2. 如果 `rejectPromise` 被调用并接收一个参数`r`，执行 `reject(r)`
      3. 如果 `resolvePromise` 和 `rejectPromise` 已经被多次调用或以相同参数多次调用的话，优先第一次的调用，忽略之后的所有调用
      4. 如果`then`过程出现了异常
         * 如果`resolvePromise` 和 `rejectPromise` 已经被调用，忽略异常
         * 否则 执行 `reject()`
   4. 如果 `then` 不是一个函数，直接 `resolve(x)`
4. 如果 `x` 既不是对象也不是函数，直接 `resolve(x)`
