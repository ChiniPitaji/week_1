// function findSum(n) {
// let ans = 0;
// for (let i = 0; i < n; i++) {
// ans += i;
// }
// console.log(ans);
// }

// function findSumTill100() {
// const result = findSum(100);
// return result;
// }

// setTimeout(findSumTill100, 1000);
// console.log("hello world");


// //some async functions:settimeout,fs.readFile,Fetch

const fs=require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("hi there")  //this will print first as the reading file takes a longer time that


let a=0;
for(let i=0;i<10000000000;i++){
    a++;
}
console.log("hi there 2")