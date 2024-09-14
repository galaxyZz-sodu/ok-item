// let obj23 = {
//     a: 23,
//     b: {
//         xixi: 1,
//         haha: 2,
//     }
// }

// let obj34 = obj23;

// let obj45 = {...obj23};

// obj34.a = 1;
// obj34.b.xixi = 444
// console.log(obj23);
// console.log(obj34);

// console.log('-------');

// obj45.a = 2;
// obj45.b.xixi = 555;

// console.log(obj23);
// console.log(obj45);


// const obj = {
//     a: {
//         xixi: 12,
//         haha: 23
//     },
//     b: [1 ,2, 3],
//     c: 12
// }

// function deepCopy(object) {
//     if (!object || typeof object !== "object") return;
  
//     let newObject = Array.isArray(object) ? [] : {};
  
//     for (let key in object) {
//         console.log(key, '来了');
//       if (object.hasOwnProperty(key)) {
//         newObject[key] =
//           typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
//       }
//     }
  
//     return newObject;
//   }


function deepCopy(obj) {
    if (typeof obj !== 'object' || !obj) return;
    let newObj = Array.isArray(obj) ? [] : {};
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
            newObj[item] = typeof obj[item] === 'object' ? deepCopy(obj[item]) : obj[item];
        }
    }
    return newObj;
}

//   const obj2 = deepCopy(obj)

// function deepClone(obj) {
//     if ( !obj || typeof obj !== 'object') return;
//     // console.log('xixi');
//     let nowObj = Array.isArray(obj) ? [] : {};

//     for (let key in obj) {
//         console.log(key);
//         if (obj.hasOwnProperty(key)) {
//             console.log(obj[key]);
//             nowObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]; 
//         }
//     }
//     return nowObj

// }

// const backupObj = deepClone(obj)

// console.log(backupObj);

// class createTask {
//     name = '';

//     action = '';

//     nowPromise = Promise.resolve();

//     constructor(name) {
//         this.name = name;
//         console.log(`${this.name} is ready`);
//         return this;
//     }

//     do(action) {
//         this.nowPromise = this.nowPromise.then((res) => {
//             this.action = action;
//             console.log(`${this.name} do ${this.action}`);
            
//         })
//         return this;
//     }

//     wait(time) {
//         this.nowPromise = new Promise((resolve, reject) => {
//             console.log(`sleep ${time}`);
//             setTimeout(() => {
                
//                 resolve()
//             }, time);
//         })
//         return this;
//     }


// }

// const nowTask = new createTask('user1');

// nowTask.do('xixi').wait(1000).do('haha')



const xixi = Promise.resolve().then((res) => {
    console.log(res);
    return new Promise((resolve) => {
        resolve(234)
    })
}).then((res) => {
    console.log(res);
    // return '大几把'
    return new Promise((resolve, reject) => {
        console.log('等等先');
        setTimeout(() => {
            resolve(456)
        }, 2000)
        // resolve(234)
    }) 
}).then((res) => {
    // console.log(res);
    return Promise.resolve(123)
}).then((res) => {
    console.log(res);
    
})

console.log(xixi);







