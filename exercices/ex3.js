const X=10;
const Y=100;
let somme=0;
for (let i=X; i<=Y; i++)
{
    if(i%3==0 && i%5==0)
    {
        somme=somme+i;
    }
}
console.log("la somme est : " + somme);