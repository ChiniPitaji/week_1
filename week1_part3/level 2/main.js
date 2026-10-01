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

// const fs=require("fs");

// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data);
// })

// console.log("hi there")  //this will print first as the reading file takes a longer time that


// let a=0;
// for(let i=0;i<10000000000;i++){
//     a++;
// }
// console.log("hi there 2")

//-------------------promises-----------------------------
//this code is ugly ,promises are syntactical sugar that make this code slightly more readable

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

const fs = require('fs');
// my own asynchronous function
function ChiniReadFile() {
    console.log("inside ChiniReadFile");
    // var p=new Promise(function(resolve)
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile("a.txt", "utf-8", function (err, data) {
            console.log("before resolve");
            resolve(data);
        });
    })
    // return p;
}

// callback function to call
function onDone(data) {
    console.log(data)
}

var a=ChiniReadFile();
console.log(a);
a.then(onDone);