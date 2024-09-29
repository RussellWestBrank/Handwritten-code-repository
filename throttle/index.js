function throttle(fn, delay) {
    let timerId = null
    return function(){
        if(timerId){
            clearTimeout(timerId)
        }
        timerId = setTimeout(() => {
            fn.apply(this,arguments) 
        },[delay])
    }
}