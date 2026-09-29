// console.log("hey its your fav chinipitaji");
// //this line will through error bcoz javascript is an interpreted language

// console.log(a);




// const a=1; //(value in const is fixed and cannot be changed)
// let a=1; //(in let we can chnage value of the variable throughout the program)
// a=2;
// //a=shivam;
// console.log(a);



// let firstName="shivam";
// let age=20;
// let isMarried=false;

// //console.log("this person name is "+firstName +" and his age is "+age)

// // console.log(firstName + " is not married");
// // console.log(firstName + " is  married");  //[which one is correct? so introduced the new topic]

// if(isMarried==true){
//     console.log(firstName + " is  married");
// }else{
//     console.log(firstName + " is not married");
// }



// let answer=0;
// answer=answer+1+2+3+4+5;
// console.log(answer);
//-->here the problem is what if the numbers becomes 100 or 1000 wwe can wirte code in such ways

// let answer=0;
// answer=answer+1;
// answer=answer+2;
// answer=answer+3;
// answer=answer+4;

// console.log(answer);
//-->here also the same problem we can't write this code for 100 or 1000

//--->-->so the concepts of loops comes into the picture

// let answer=0;
// for(let i=0;i<=100;i++){
//     answer=answer+i;
// }
// console.log(answer);

//question: print all the even numbers from the array
// const ages=[21,22,23,24,25]
// for(let i=0;i<ages.length;i++){
//     if(ages[i]%2==0){
//         console.log(ages[i]);
//     }
// }

//question: print all the male names from the array
// const personArray=["shivam","kumar","akanksha"]
// const genderArray=["male","male","female"]
// for(let i=0;i<personArray.length;i++){
//     if(genderArray[i]=="male"){
//         console.log(personArray[i]);
//     }
// }

//-->concepts of objects

// const user1={
//     firstName:"shivam",
//     gender:"male",
// }
// console.log(user1["firstName"])

//-------------------------------------
// const alluser=[{
//     firstName:"shivam",
//     gender:"male",
// },{
//     firstName:"kumar",
//     gender:"male",
// },{
//     firstName:"akanksha",
//     gender:"female",
// }]

// for(let i=0;i<alluser.length;i++){
//     if(alluser[i]["gender"]=="male"){
//         console.log(alluser[i]["firstName"]);
//     }
// }




//--->concpets of functions

// function sum(a,b){
//     const sumValue=a+b;
//     return sumValue;
// }

// const value=sum(1,2);
// console.log(value);



//-----------------------------------------

// function sum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }
// const ans=sum(1, 2);
// displayResult(ans);
// // You are only allowed to call one function after this
// // How will you displayResult of a sum

//we can also write as this:

// function sum(num1, num2) {
//     let result = num1 + num2;
//     displayResult(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }
// const ans=sum(1, 2);

// now what is u can't add the function itself,then we can use passing that functions as an argument i.e.->CALLBACK

function sum(num1,num2,fntocall) {
    let result = num1 + num2;
    fntocall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}
const ans=sum(1, 2,displayResult);

