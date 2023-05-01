// Créer un tableau pour stocker les combinaisons de deux nombres
let combinations = [];

// Générer toutes les combinaisons de deux nombres entre 00 et 99
for (let i = 0; i <= 99; i++) {
  for (let j = i + 1; j <= 99; j++) {
    // Vérifier que les deux nombres sont différents
    if (i !== j) {
      // Ajouter la combinaison unique au tableau (remplacé par la méthode de tri dans ce cas)
      let combination = [i, j].sort((a, b) => a - b);
      combinations.push(combination);
    }
  }
}

// Afficher toutes les combinaisons triées dans l'ordre croissant
for (let combination of combinations) {
  console.log(combination.join(' '));
}
