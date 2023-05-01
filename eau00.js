// Boucle pour le premier chiffre
let array= []
for (let i = 0; i <= 9; i++) {
    // Boucle pour le deuxième chiffre, à partir du chiffre i pour éviter les doublons
    for (let j = i; j <= 9; j++) {
      // Boucle pour le troisième chiffre, à partir du chiffre j pour éviter les doublons
      for (let k = j; k <= 9; k++) {
        // Vérifie que les trois chiffres sont différents
        if (i != j && j != k && i != k) {
          // Crée une chaîne de caractères pour représenter la combinaison
          const combination = `${i}${j}${k}`;
          // Vérifie que la combinaison ne viole aucune des règles
          if (combination != "987" && combination != "020" && combination != "021" && combination != "000") {
            // Affiche la combinaison
            process.stdout.write(combination +" ")
          }
        }
      }
    }
  }
