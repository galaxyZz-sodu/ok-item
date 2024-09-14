Function.prototype.myCall = function(nowObj, ...args) {
    const fn = this;
    nowObj = nowObj !== null && nowObj !== undefined ? Object(nowObj) : window;

    nowObj.fn = fn;

    const result = nowObj.fn(...args);
    delete nowObj.fn;
    return result;
}

Function.prototype.myApply = function(nowObj, args) {
    const fn = this;
    nowObj = nowObj!== null && nowObj !== undefined ? Object(nowObj) : window;

    args = args.length ? args : [];

    nowObj.fn = fn;

    const result = nowObj.fn(...args);
    delete nowObj.fn;

    return result;
}

Function.prototype.myBind = function(nowObj, ...args) {
    const fn = this;
    nowObj = nowObj !== null && nowObj !== undefined ? Object(nowObj) : window;

    return function(...newArgs) {
        nowObj.fn = fn;
        const result = nowObj.fn(...args, ...newArgs);

        delete nowObj.fn;

        return result;
    }
}

function curry(fn) {
    return function curryed(...arg) {
        if (arg.length >= fn.length) {
            return fn.apply(this, arg);
        } else {
            function curry2(...arg2) {
                return curryed.apply(this, arg.concat(arg2))
            }
            return curry2;
        }
    }
}


// function hyCurrying(fn) {
//     return function curried(...arg) {
//       if (arg.length >= fn.length) {
//         return fn.apply(this, arg);
//       } else {
//         function curried2(...arg2) {
//           return curried.apply(this, arg.concat(arg2));
//         }
//         return curried2;
//       }
//     }
//   }

//   function xixi2(num1, num2, num3) {
//     console.log(num1, num2, num3);
//   }

//   const cur = curry(xixi2)
//   cur(1)(2)(3)


function debounce(fn, time, immediate) {
    let timer = null;
    let isDo = false;
    return function(...arg) {
        if (timer) {
            clearTimeout(timer)
        };
        if (immediate && !isDo) {
            fn.apply(this, arg);
            isDo = true;
        }
        timer = setTimeout(() => {
            fn.apply(this, arg);
            timer = null;
            isDo = false;
        }, time);
    }
}


function throttle(fn, time) {
    let timer = null;
    return function(...arg) {
        if (timer) return;

        timer = setTimeout(() => {
            fn.apply(this, arg);
            timer = null;
        }, time)
    }
}


// function dede(num) {
//     console.log(num);
// }

// const debouncedede = debounce(dede, 2000);

// debouncedede('施工地方个');




Promise.myAll = function(promiseArr) {
    return new Promise((resolve, reject) => {
        const resArr = []
        promiseArr.forEach((item) => {
            item.then((res) => {
                resArr.push(res);
                if (resArr.length >= promiseArr.length) {
                    resolve(resArr);
                }
            }).catch((e) => {
                resArr.push(e);
                if (resArr.length >= promiseArr.length) {
                    resolve(resArr);
                }
            })
        })
    })
}

Promise.myRace = function(promiseArr) {
    return new Promise((resolve, reject) => {
        promiseArr.forEach((p) => {
            p.then((res) => {
                resolve(res)
            }).catch((e) => {
                reject(e);
            })
        })
    })
}


function maopao(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr
}

const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 2000)
})

// const b = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2)
//     }, 1000)
// })

// Promise.myAll([a, b]).then((res) => {
//     console.log(res);
// })


function MyInstanceOf(obj, ct) {
    let proto = obj.__proto__;
    let prototype = ct.prototype;
    while(true) {
        if (!proto) return false;
        if (proto === prototype) {
            return true;
        }
        proto = proto.__proto__;
    }
}

console.log(MyInstanceOf({xixi: 12}, Array));

