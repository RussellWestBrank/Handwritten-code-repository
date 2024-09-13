//  class Human {
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     name: string;
//     age: number;
//     getName() {
//         return this.name;
//     }
//     getAge() {
//         return this.age;
//     }
//     setName(name: string) {
//         this.name = name;
//     }
//  }

// class Man extends Human {
//     constructor(name: string, age: number, salary: number) {
//         super(name, age);
//         this.salary = salary;
//     }
//     salary: number;
//     getSalary() {
//         return this.salary;
//     }
//     setSalary(salary: number) {
//         this.salary = salary;
//     }
// }

// const man = new Man("John", 30, 5000);
// console.log(man.getName()); // John

//手写expends
// 1. 创建一个子类的构造函数ChildClass。
// 2. 在子类的构造函数内部调用父类的构造函数来继承父类的属性。
// 3. 继承父类的原型方法。
// 4. 修正子类的构造器引用。
// 5. 将子类方法和属性添加到子类的原型上。
function createClass(sons, superClass) {
    // 创建一个子类的构造函数
    function ChildClass(args) {
      // 调用父类的构造函数
      superClass.call(this, args);
      // 调用子类自己的构造函数
      if (typeof sons.constructor === 'function') {
        sons.constructor.call(this, args);
      }
    }
  
    // 继承父类的原型方法
    ChildClass.prototype = Object.create(superClass.prototype);
    // 修正子类的构造器
    ChildClass.prototype.constructor = ChildClass;
  
    // 子类扩展/覆盖父类原型上的属性和方法
    for (let key in sons) {
      if (sons.hasOwnProperty(key) && key !== 'constructor') {
        ChildClass.prototype[key] = sons[key];
      }
    }
  
    return ChildClass;
  }
  
  // 定义父类
  function Human(args) {
    this.name = args.name || 'Unnamed';
  }
  
  Human.prototype.speak = function() {
    console.log(this.name + ' is speaking.');
  };
  
  // 定义子类
  const sons = {
    constructor: function(args) {
      this.age = args.age || 0;
    },
    speak: function() {
      console.log(this.name + ' is ' + this.age + ' years old and speaking.');
    }
  };
  
  // 使用 createClass 创建子类 Man 继承自 Human
  const Man = createClass(sons, Human);
  
  // 测试
  const man = new Man({name: 'John', age: 25});
  man.speak();  // 输出: "John is 25 years old and speaking."
