// const promise1 = Promise.resolve('Error 1');
// const promise2 = Promise.reject('Error 2');
// const promise3 = Promise.reject('Error 3');
 
 
// Promise.race([promise1, promise2, promise3])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error); // AggregateError: All promises were rejected
//   });

// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('resolve3');
//         console.log('timer1')
//     }, 0)
//     resolve('resovle1');
//     resolve('resolve2');
// }).then(res => {
//     console.log(res)
//     setTimeout(() => {
//         console.log(p1)
//     }, 1000)
// }).finally(res => {
//     console.log('finally', res)
// })

// console.log(p1);

let a = 1;

let b = a;

b = 4;

console.log(a, b);