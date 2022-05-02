/**
 * On souhaite vérifier si un mot se trouve dans un tableau
 */


 var valeurs = ["titi", "toto", "tata"];

 // Sans some()
 let trouve = false;
 for (let i = 0; i < valeurs.length; i ++) {
     if(valeurs[i] === "toto") {
        trouve = true;
         break;
     }
 }
 
 if(trouve) {
     console.log("toto est présent dans le tableau")
 }


// Avec some()
if(valeurs.some((valeur) => valeur === "toto")){
    console.log("toto est présent dans le tableau");
}