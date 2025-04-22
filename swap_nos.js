function swap(n1,n2)
{
    
     temp =n1;
    n1=n2;
    n2=temp;
     console.log("n1",n1,"n2",n2)
}
//swap(1,2);

//2nd methd desctructuring assignment
let a=2,b=3;
console.log(a,b);
[a,b]=[b,a]
console.log(a,b);
