/**
 * On souhaite récupérer une partie d'une phrase entre deux mots
 */

const phrase = "Je veux récupérer ce qu'il y a entre le mot début dans ma phrase et le mot fin de ma phrase.";
const debut = phrase.indexOf('début');
const fin = phrase.indexOf('fin')+3;
const intervalle = phrase.slice(debut, fin);
console.log(intervalle);