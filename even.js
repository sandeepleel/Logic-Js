function even(n)
{
    let array=[];
    for(let i=0;i<=n;i++)
    {
        if(i%2==0)
        array.push(i);
    }
    return array;
}
console.log(even(20));
//using while 
function even(n){
    let array=[];
    let i=0;
    while(i<=n)
    {
        if(i%2==0)
        {
            array.push(i);
            console.log(i);
        }
            i++;
        
    }
    return array;
}
console.log(even(20))