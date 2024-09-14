
function cloneDeep(obj) {
    if (typeof obj !== 'object') return;
    let targetObj = Array.isArray(obj) ? [] : {};
    for (let i in obj) {
        targetObj[i] = typeof obj[i] === 'object' ? cloneDeep(obj[i]) : obj[i];
    }
    return targetObj;
}

const obj1 = {
    a: 12,
    b: {
        c: 55
    }
}

const obj2 = cloneDeep(obj1);

obj2.b.c = 33

console.log(obj1);
console.log(obj2);