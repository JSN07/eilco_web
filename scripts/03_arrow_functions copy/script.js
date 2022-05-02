// Fonction avec synthaxe traditionnelle
const maFonction = function() {
    console.log("ma fonction");
}

// Fonction flechée
const mafonctionFlechee = () => {
    console.log("ma fonction flechée");
}

// Fonction flechée simplifiée
const mafonctionFlecheeSimplifiee = () =>  console.log("ma fonction flechée simplifiée");

// Fonction flechée avec paramètres
const mafonctionFlecheeAvecParametre = (param1, param2) => {
    console.log(`mon paramètre valent ${param1} et ${param2}`);
}

// Fonction flechée avec un seul paramètre
const mafonctionFlecheeAvecUnSeulParametre = parametre => {
    console.log("mon unique paramètre vaut :", parametre);
}

const parametreParDefaut = (param = "hello") => {
    console.log(param);
   }

// Retour implicite
const retourImplicite = () => 1+2;



maFonction();
mafonctionFlechee();
mafonctionFlecheeSimplifiee();
mafonctionFlecheeAvecParametre("test1", "test2");
mafonctionFlecheeAvecUnSeulParametre("test");
parametreParDefaut("salut");
parametreParDefaut();
console.log(retourImplicite());