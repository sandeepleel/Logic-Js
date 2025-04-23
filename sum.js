function even(n){
    let array=[];
    let i=0;
    let sum=0;
    while(i<=n)
    {
        if(i%2==0)
        {
             sum=sum+i;
            array.push(i);
           
            
        }
            i++;
        
    }
    return sum;
}
console.log(even(20))