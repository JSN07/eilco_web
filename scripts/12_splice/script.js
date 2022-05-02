/**
 * On souhaite enlever des éléments dans un tableau depuis un certain index
 */

const items = ['1', '2', '3', '4', '5', '6'];
items.splice(3, 2);
console.log(items);

const resultats = items.splice(1, 2);
console.log(resultats);