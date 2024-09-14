

// @ts-ignore
// Array.prototype.selectSort = function() {
//     for (let i = 0; i < this.length - 1; i++) {
//         let minIndex = i;
//         for (let j = i; j < this.length; j++) {
//             if (this[minIndex] > this[j]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex !== i) {
//             [this[i], this[minIndex]] = [this[minIndex], this[i]]
//         }
//     }
// }

Array.prototype.selectSort = function() {
    for (let i = 0; i < this.length; i++) {
        let minIndex = i
        for (let j = i; j < this.length; j++) {
            if (this[minIndex] > this[j]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [this[i], this[minIndex]] = [this[minIndex], this[i]]
        }
        
    }
}

let arr3 = [4,3,7,1,8,3];

// @ts-ignore
arr3.selectSort();
console.log(arr3);

// let a2;

// var a4;
