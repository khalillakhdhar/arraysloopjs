let a=28;
let b=42;
/*
15-5=10
10-5=5
5-5=0
pgcd 5
a=10 b=12;  
12-10=2
10-2=8
..
2=> pgcd
*/
while(a!=b)
{
if(a>b)
a=a-b;
else
b=b-a;
}
console.log("pgcd"+ a);