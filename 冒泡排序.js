const arr = [2,1,4,3,6,5];

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

console.log(maopao(arr));



if (s.length <= 1) {
    return s.length;
}
let L = 0
let R = 1
let max = 0
while (R < s.length) {
    let nowStr = s.slice(L, R);
    if (nowStr.indexOf(s.charAt(R) !== -1) {
        L++;
        continue;
    } else {
        R++;
    }
    max = Math.max(max, R - L);
}
return max;

if (s.length <= 1) {
    return s.length;
}
let L = 0
let R = 1
let max = 0
while (R < s.length) {
    let nowStr = s.slice(L, R);
    if (nowStr.indexOf(s.charAt(R) !== -1)) {
        L++;
        continue;
    } else {
        R++;
    }
    max = Math.max(max, R - L);
}
return max;