arguments = process.argv.slice(2);
let elementRecherche = arguments[arguments.length - 1]; // Récupérer l'élément recherché
let indexTrouve = -1;

for(i = 0; i < arguments.length - 1;i++){
    if(arguments[i] === arguments[arguments.length - 1]){
        indexTrouve = i;
        break;
    }
}

if (indexTrouve === -1) { // Si l'élément n'est pas trouvé
    console.log("-1");
  } else { // Sinon, afficher l'index trouvé
    console.log(indexTrouve);
  }
