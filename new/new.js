//使用
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// const person1 = new Person('Alice', 25);
// person1.sayHello();
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// }

// const person1 = new Person('Alice', 25);
// person1.sayHello();

/*手写实现new
构造一个新对象
1. 原型链指向构造函数的原型对象
2. 参数赋值 */
// function myNew(constructor,...args) {    
//     const obj = new Object()
    
//     //原型链指向构造函数的原型对象
//     obj.__proto__ = constructor.prototype
//     // 参数赋值
//     constructor.apply(obj,args)

//     return obj
// }

// const person1 = myNew(Person,'Alice', 25)


//构造函数有返回值
//返回对象，则在实例 person 中只能访问返回的对象中的属性
//返回其他类型，相当于没有返回值进行处理
// 最终版的代码
function objectFactory() {
    var obj = new Object(),
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;

};
