// Promise.resolve().then(() => {
//     console.log(0)
//     return Promise.resolve(4)
// }).then((res) => {
//     console.log(res)
// })

// Promise.resolve().then(() => {
//     console.log(1)
//     // return Promise.resolve(2)
//    }).then((res) => {
//     // console.log(res)
//     console.log(2);
//    }).then(() => {
//     console.log(3)
//    }).then(() => {
//     console.log(5)
//    }).then(() =>{
//     console.log(6)
//    })

// console.log('1' + 2 + 4);

// function race(arr) {
//     let res;
//     return new Promise((resolve, reject) => {
//         arr.forEach((item) => {
//             item.then((res) => {
//                 resolve(res)
//             }, (err) => {
//                 reject(err)
//             } )
//         })
//     })
    
// }

// const f1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('获取到数据')
//     }, 4000)
// } )

// const f2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('超时')
//     }, 3000)
// })

// race([f1, f2]).then((res) => {
//     console.log(res);
// })


function fetch1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('错了')
        }, 2000)
    })
}

function haha() {
    return new Promise((resolve, reject) => {
        fetch1().then((res) => {
            resolve(res)
        }).catch((err) => {
            // console.log(err);
            reject(err)
        }) 
    })
}

async function getArr() {
    try {
        const res = await haha();
        console.log(res);
    } catch(e) {
        console.log(e);
    }
    
}

getArr()