/**
 * On souhaite vérifier que tous les élément du tableau sont plus grand que 10
 */

 var valeurs = ["11", "14", "20"];

 // Sans every()
 let superieurs = [];
 for (let valeur of valeurs) {
    if(valeur > 10) {
        superieurs.push(valeur);
     }
 }
 
 if(superieurs.length === valeurs.length) {
     console.log("Tous les éléments sont supérieurs à 10");
 }

 
// Avec every()
if(valeurs.every((valeur) => valeur > 10)){
    console.log("Tous les éléments sont supérieurs à 10");
}