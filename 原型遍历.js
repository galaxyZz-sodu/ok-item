// const obj = {
//     a: 1, 
//     b: 2
// }

// Object.defineProperty(obj, 'a', {
//     get() {
//         return 3
//     }, 
//     set(newVal) {
//         if (newVal > 4) {
//             console.log('可以');
//         }
//     }
// })

// console.log.prototype

// console.log(obj.a);

// // let c = null

// function proxyData(obj) {
//     let backupObj = {

//     }

//     for (let i in obj) {
//         Object.defineProperty(backupObj, i, {
//             get() {
//                 return obj[i];
//             },
//             set(newVal) {
//                 console.log('改了');
//                 return obj[i] = newVal;
//             }
//         })
//     }
//     return backupObj
// }

// const proxyObj = proxyData(obj);

// proxyObj.b = 'iru'

// console.log(proxyObj.b);


 
// Object.prototype.c = 'nihao'



// console.log(Object.getOwnPropertyDescriptor(obj.__proto__, 'c'));


// obj.c = 13

// console.log(obj.c);

const obj = {
    a: 1, 
    b: 2
}

let fn = console.log;

console.log = function() {
    fn('--------');
    fn(...arguments);
    fn('---------')
}

console.log('321');

