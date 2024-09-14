function parent1() {
    this.name = 'baba'
    this.age = 50
}

parent1.prototype.getName = function() {
    console.log(this.name);
}

// 构造函数继承（就是在函数里面用call）
function son1() {
    parent1.call(this);
    this.type = 'ez';
    // this.age = 22
}

// 原型链继承
son1.prototype = new parent1();

// 组合继承就是同时用原型链继承和构造函数继承


let parentObj = new parent1()
parentObj.getName();

let son = new son1()
console.log(son.getName());

// 
