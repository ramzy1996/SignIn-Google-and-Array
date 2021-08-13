//[20,30,45,25,48,98,33,33,225,56,55,48,78,20,30,70]==> remove repted numbers and accending ore

const test = [
  20, 30, 45, 25, 48, 98, 225, 33, 33, 56, 55, 48, 78, 20, 30, 70, 500,
];
console.log(test);

let temp0 = test.sort((a, b) => a - b);
const temp = new Set(temp0);
const arr = [...temp];
console.log(arr);

document.getElementById("mydiv").innerText = arr;

// ! if sort used 1st letter or 1st number only sorting
// const set=new Set([20,30,45,25,48,98,33,33,225,56,55,48,78,20,30,70]);
// console.log(set);
// const arr=[...set];
// console.log(arr.sort());
