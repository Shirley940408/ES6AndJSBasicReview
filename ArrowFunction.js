function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| 正确地指向 p 实例
    console.log('Inside setInterval '+ this.age)
  }, 1000);
  console.log('Inside of class ' + this.age)
}

var p = new Person();