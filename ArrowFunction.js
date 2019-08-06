// function Person() {
//   // Person() 构造函数定义 `this`作为它自己的实例.
//   this.age = 0;

//   setInterval(function growUp() {
//     // 在非严格模式, growUp()函数定义 `this`作为全局对象, 
//     // 与在 Person()构造函数中定义的 `this`并不相同.
//     this.age++;
//     console.log('Inside of setInterval '+ this.age);
//   }, 1000);
// }

// var p = new Person();
// console.log(p.age)

// function Person() {
//   var that = this;
//   that.age = 0;

//   setInterval(function growUp() {
//     //  回调引用的是`that`变量, 其值是预期的对象. 
//     that.age++;
//     console.log('Inside of setInterval '+ that.age);
//   }, 1000);
// }
// var p = new Person();
// console.log(p.age);

function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| 正确地指向 p 实例
    console.log('Inside setInterval '+ this.age)
  }, 1000);
  console.log('Inside of class ' + this.age)
}

var p = new Person();
