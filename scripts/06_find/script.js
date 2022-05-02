/**
 * On souhaite trouver une valeur par critère dans un tableau
 */

const valeurs = ["toto", "tata", "test", "essai"];
const mot = valeurs.find((valeur) => valeur.includes("ai"));
console.log(mot);