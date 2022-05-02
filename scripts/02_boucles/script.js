var tableau = [10, 20, 30, 40];

// for
function boucleFor(tableau) {
  let total = 0;
  for (let i = 0; i < tableau.length; i++) {
    total += tableau[i];
  }
  return total;
}

// do... while
function boucleDoWhile(tableau) {
  let total = 0;
  let i = 0;
  do{
    total += tableau[i];
    i++;
  } while (i < tableau.length)
  return total;
}

// while
function boucleWhile(tableau) {
  let total = 0;
  let i = 0;
  while (i < tableau.length){
    total += tableau[i];
    i++;
  } 
  return total;
}

// break
function boucleAvecBreak(tableau) {
  let total = 0;
  let i = 0;
  while (i < tableau.length){
    if(total > 50) {
      console.log("total:", total);
      console.log("total > 50 : on sort de la boucle:");
      break;
    }
    total += tableau[i];
    i++;
  } 
  return total;
}

// continue
function boucleAvecContinue() {
  let i = 0;
  let n = 0;
  while (i < 5) {
    i++;
    if (i === 3) {
      continue;
    }
    n += i;
    console.log(n);
  }
}

function boucleForIn(tableau) {
  for (let i in tableau) {
    console.log(i); // affiche 0, 1, 2, 3
  }
}

// for... of
function boucleForOf(tableau) {
  for (let i of tableau) {
    console.log(i); // affiche 10, 20, 30, 40
  }
}

// console.log("for: ", boucleFor(tableau));
// console.log("do... while: ", boucleDoWhile(tableau));
// console.log("while: ", boucleWhile(tableau));
// console.log("break: ", boucleAvecBreak(tableau));
boucleAvecContinue();
boucleForIn(tableau);
boucleForOf(tableau);