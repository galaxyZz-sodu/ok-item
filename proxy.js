const obj4 = {
    a: 123,
    b: 444,
    other: {
        name: '小明'
    },
    nowArr: [1,2,3,4]
}

// let arr5 = [1,2,3,4,5]

let handler = {
    get(target, key, receiver) {
        console.log('target--->', target, receiver);
        console.log('查看属性' + String(key));
        let res = Reflect.get(target, key, receiver)
        return typeof res === 'object' ? new Proxy(res, handler) : res;
    },
    set(target, key, value, receiver) {
        console.log(`设置属性${String(key)}值为${value}`);
        return Reflect.set(target, key, value, receiver)
    }
}



let p1 = new Proxy(obj4, handler)

console.log(p1.a);

// p1.nowArr.push(8);
// console.log(p1);
