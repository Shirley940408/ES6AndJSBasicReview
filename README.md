##不绑定this的问题
### 在箭头函数出现之前，每个新定义的函数都有它自己的 this值（在构造函数的情况下是一个新对象，在严格模式的函数调用中为 undefined，如果该函数被作为“对象方法”调用则为基础对象等）。This被证明是令人厌烦的面向对象风格的编程。
```js
function Person() {
  // Person() 构造函数定义 `this`作为它自己的实例.
  this.age = 0;

  setInterval(function growUp() {
    // 在非严格模式, growUp()函数定义 `this`作为全局对象, 
    // 与在 Person()构造函数中定义的 `this`并不相同.
    this.age++;
    console.log('Inside of setInterval '+ this.age);
  }, 1000);
}

var p = new Person();
console.log(p.age)
```
[thisProblem](./img/thisProblem.png)

### 箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this。因此，在下面的代码中，传递给setInterval的函数内的this与封闭函数中的this值相同：

```js
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| 正确地指向 p 实例
    console.log('Inside setInterval '+ this.age)
  }, 1000);
  console.log('Inside of class ' + this.age)
}

var p = new Person();
```
[ArrowFunction](./img/ArrowFunction.png)