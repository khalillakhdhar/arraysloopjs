// 1 step: if(x%2==0) => paire (console.log(x))
// 2 step: boucle qui domine le controle [0-20] =>


//1 la boucle dominante
for(let i=0; i<=20;i++) {
// condition d'affichage
if(i%2==0) {
console.log("dans for i="+i);
}
}
// solution while 
// boucle et même code mais je dois initialiser i et l'incrémenter
let i=0
while(i<=20) {
    if(i%2==0) {
        console.log("dans while i="+i);
        }
    i++;
}