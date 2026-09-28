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

let answer=0;
for(let i=0;i<=100;i++){
    answer=answer+i;
}
console.log(answer);