//使用
const obj = {
  x: 42,
  getX: function (name) {
    console.log(name);
    return this.x;
  },
};

const unboundGetX = obj.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(obj);
console.log(boundGetX());
// Expected output: 42

//手写实现
// 不传参数版
Function.prototype.myBind = function (context) {
    const self = this
    return function() {
        return self.apply(context)
    }
}
// 最终版
Function.prototype.myBind = function (context) {
    const self = this
    //类数组arguments使用数组方法
    const args = Array.prototype.slice.call(arguments, 1)
    return function() {
        const bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(context, args.concat(bindArgs))
    }
}
 /**
   * 总结
   * 1. bind返回一个函数
   * 2. 函数的this会丢失，所以需要先保存
   * 3. 利用apply或者call完成绑定
   */