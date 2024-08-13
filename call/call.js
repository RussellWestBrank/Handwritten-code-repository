const obj = {
  value: 1,
};

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}
bar.call(obj, "kevin", 18);

// 需求分析
// 1. 原型链调用
// Function.prototype.myCall
// 2. 将bar函数内的this指向foo
// obj.bar()
// 3. 获取传参，执行bar函数
// bar.myCall(foo, "kevin", 18);

Function.prototype.myCall = function (context, ...args) {
  context.fn = this;

  context.fn(...args);

  delete context.fn;
};

//测试一下
const foo = {
  value: 1,
};

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}
bar.myCall(foo, "wqq", 12);


// 4. this 参数可以传 null，当为 null 的时候，视为指向 window
// 5. 实现返回值
Function.prototype.myCall2 = function(context){
    let context = context || window;
    context.fn = this
    
    let arg = [...arguments].slice(1)
    let result = context.fn(...arg)
    
    delete context.fn;
    return result
  }


  let value = 2;

  let _obj = {
      value: 1
  }
  
  function bar(name, age) {
      console.log(this.value);
      return {
          value: this.value,
          name: name,
          age: age
      }
  }
  
  bar.call2(null); // 2
  
  console.log(bar.call2(_obj, 'kevin', 18));
  // 1
  // Object {
  //    value: 1,
  //    name: 'kevin',
  //    age: 18
  // }