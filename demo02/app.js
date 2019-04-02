import "babel-polyfill";

let func = () => 1;
let arr = [1, 2, 2, 3];
const NUM = 12;
const arrB = arr.map(item => item + 1);
console.log(arrB.includes(8));
console.log(new Set(arrB));
