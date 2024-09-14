// // @ts-nocheck
// function MyPromise(fn) {
//     this.status = 'pending';
//     this.result = undefined;
//     this.callback = [];
//     const self = this;
//     function resolve(data) {
//         if (self.status !== 'pending') {
//             return;
//         }
//         self.status = 'fulfilled';
//         self.result = data;
//         self.callback.forEach((item) => {
//             item.onResolve(data);
//         })
//     }

//     function reject(err) {
//         if (self.status !== 'pending') {
//             return;
//         }
//         self.status = 'reject';
//         self.result = err;
//         self.onReject.forEach((item) => {
//             item.onReject(err);
//         })
//     }

//     try {
//         fn(resolve, reject);
//     } catch (e) {
//         reject(e);
//     }
    
// }       

// MyPromise.prototype.then = function(thenCallback, catchCallback) {
//     return new Promise((resolve, reject) => {
//         if (this.status === 'fulfilled') {
//             const result = thenCallback(this.result);

//             resolve(result);
//         }

//         if (this.status === 'reject') {
//             const result = catchCallback(this.result);
//             reject(result);
//         }

//         if (this.status === 'pending') {
//             this.callback.push({
//                 onResolve: thenCallback,
//                 onReject: catchCallback,
//             })
//         }
//     }) 
// }

// MyPromise.prototype.catch = function(catchCallback) {

// }

// const p = new MyPromise((resolve, reject) => {
//     // reject(1);
//     setTimeout(() => {
//         resolve(2);
//     }, 1000)
    
//     // throw 23
// })

// const p2 = p.then((res) => {
//     console.log(res, '成功2');
//     return new Promise((r, j) => {
//         r(555)
//     })
// }, (err) => {
//     console.log(err, '失败');
// } )


// // console.log(p);
// console.log(p2);

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('错了')
    }, 1000)
}) 

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('对了')
    }, 1000)
})

const arr2 = Promise.allSettled([p1, p2]).then((res) => {
    console.log(res);
});
console.log(arr2);
