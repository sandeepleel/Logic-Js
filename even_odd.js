// check number is even or odd
//approach is by finding the remainder 

//we can check the remainder when divided by2. if the remainder is 0, the number is even; otherwise it is odd.
/*
function isEven(n)
{
    return(n%2==0);
}
//code
let n=101; 
if(isEven(n)){
    console.log("true");
  //  console.log(isEven(n))
}
else{
    console.log("false");
  //  console.log(isEven(n))
}
  */
//Output: 101 false
// 100 : even bcs remainder =0

//2nd approach
//using bitwise AND Operator

//bitwise operators 
//and bitwise returns 1 if both are 1
// or returns 1 if one bit is 1
// XOR returns 1 when both bits are different
//not inverse of 1 -> 0  0->1

// the last bit of all odd number is always 1, while for even numbers its 0
// so when performing bitwise and operation with 1, odd numbers give 1, and even numbers give 0.
// Ex: 5 (101)  -> 101
//              &  001
//                        —-
//                 001 , so this we can say it is an odd number.

             
 /*
function isEven(n)
{
    if((n&1)===0){
        return true;
    }
    else {
        return false;
    }
    
    
        return false;
    
}
let n=101;
if(isEven(n)){
    console.log("true");
}
else{
    console.log("false")
}
*/
function isEven(n)
{
    if(n== (n>>1)<<1)
        return true;
    else 
    return false;
}

let n=4;
if(isEven(n))
{
    console.log("true");
}
else{
    console.log("false");
}
                