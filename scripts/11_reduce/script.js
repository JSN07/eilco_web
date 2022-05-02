/**
 * On souhaite calculer la factorielle d'une valeur dans un tableau
 */

 var nombres = [1, 2, 3, 4, 5];

 // Sans reduce()
 var factorielle = 1;
 for (let nombre of nombres) {
    factorielle = factorielle * nombre; 
 }
 
 console.log(factorielle);
 
// Avec reduce()
console.log(nombres.reduce((factorielle, nombre) => nombre * factorielle, 1));

// Avec reduce() décomposé
const calculerFactorielle = (a, b) => a * b;
let resultatFactorielle = nombres.reduce(calculerFactorielle, 1);
console.log(resultatFactorielle);

const additionner = (a, b) => a + b;
let resultatAddition = nombres.reduce(additionner, 0);
console.log(resultatAddition);