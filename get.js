// const obj = {
//     xixi: 1,
//     haha: 2
// }

// Reflect.
let obj ={a:1}
let obj2 = {
    a: 23
}
let pObj=new Proxy(obj,{
    get(target,key,receiver){
        console.log("receiver",receiver); // receiver  Proxy {a:1}
        console.log("receiver===pObj",receiver===pObj); // true
        return Reflect.get(target,key)
    }
})

console.log(pObj.a); // 1
