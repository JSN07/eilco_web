/**
 * On souhaite créer un tableu contenant les valeurs des racines
 * carrées à partir d'un tableau de nombres
 */

// Sans map()
var valeurs = [4, 9, 16];
var racines1 = [];

for (let valeur of valeurs) {
    racines1.push(Math.sqrt(valeur));
}

console.log(racines1);


// Avec map()
var racines2 = valeurs.map(Math.sqrt);
console.log(racines2);