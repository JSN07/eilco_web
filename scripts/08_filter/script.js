/**
 * On souhaite retirer tous les éléments pairs d'un tableau
 */

// Sans filter()
var valeurs = [1, 2, 3, 4];
var impairs = [];

for (let valeur of valeurs) {
    if(valeur % 2 !== 0) {
        impairs.push(valeur);
    }
}

console.log(impairs);


// Avec filter()
var valeurs = valeurs.filter((valeur) => valeur % 2 !== 0);
console.log(valeurs);