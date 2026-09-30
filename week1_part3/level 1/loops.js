// let ans =1+2+3+4+5+6+7+8+9+10.....
// console.log(ans)

//this was the dumb of writing the code as we are repeating the same task again an again so introduced the concept of loops

// let ans =0;
// for (let i = 1; i <=50; i++) {
//     ans = ans +i;    
// }
// console.log(ans);



//--------------

//functions: a set of statements that performs a task or calculates a value

function findSum(num){
    let ans =0;
    for (let i = 1; i <=num; i++) {
        ans = ans +i;
    }
    return ans;
}

// console.log(findSum(10))

let ans=findSum(100)
console.log(ans);