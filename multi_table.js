//table of n
//1st  iterative approach used loop
function printTable(n)
{
    for(let i=1; i<=10;++i)
        console.log(n + "*" +i+ "=" + n*i);
}
let n=5;
//printTable(n)

//2nd approach : Recursive approach
function printTable2(n2,i=1)
{
    if(i==11)
        return;
    console.log(n2+"*"+ i + "=" + n2*i);
    i++;
    printTable2(n2,i);
}
let n2=5;
printTable2(n2)
