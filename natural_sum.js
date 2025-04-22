// find the sum of n natural numbers

//1st -loop based summation
function findSum(n)
{
    let sum=0;
    for(let x=1;x<=n;x++)
        sum=sum+x;
    return sum;
}
let n=5;
console.log(findSum(n));

// using formula n*(n+1)/2

//in browser with html
function mySum()
{
    let n2= parseFloat(prompt("enter a number:"));
  let  sum = n2*(n2+1)/2;
    return sum;
    // n2*(n2+1)/2;
}
//var n2=5;
console.log(mySum())