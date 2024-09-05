// 使用
const foo = {
    value: 'foo',
}
function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}

bar.apply(foo, ['wqq'])

//手写实现
Function.prototype.myApply= (context,args) => {
    if(context === null || context === undefined){
        context = window
    }

    const key = Symbol()
    context[key] = this
    const result = context.fn(...args)
    delete context.fn

    return result
}