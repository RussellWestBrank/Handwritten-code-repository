//手写防抖函数
function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            //thi指向由debounce返回函数被调用时的上下文决定
            fn.apply(this, arguments);
        }, delay);
    };
}
//举例如何使用
let obj = {
    name: 'object',
    logName: function() {        
        console.log(this.name);
    }
};

const debouncedLogName = debounce(obj.logName, 500);

// 假设我们像这样调用 debouncedLogName：
debouncedLogName();
//undefined

// 绑定logName方法的this指向obj，并且生成去抖动后的函数
const debouncedLogName1 = debounce(obj.logName.bind(obj), 500);

// 这时，即使直接调用 debouncedLogName，this 仍然指向 obj
debouncedLogName1();  // 在延时500毫秒后会输出 "object"