let arr1 = [3,2,1, 6,5,4,8,7,6]
// 
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let left = [];
//     let right = [];
//     let mid = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < mid) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left), mid, ...quickSort(right)]
// }

// console.log(quickSort(arr1));

function quiklySort(arr) {
    if (arr.length <= 1) return arr;
    let L = [];
    let R = [];
    let mid = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < mid) {
            L.push(arr[i])
        } else {
            R.push(arr[i])
        };
    }
    return [...quiklySort(L), mid, ...quiklySort(R)];
}