// Fonction qui vérifie si un nombre est premier
function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Fonction qui renvoie le premier nombre premier supérieur à n
  function nextPrime(n) {
    let i = n + 1;
    while (true) {
      if (isPrime(i)) {
        return i;
      }
      i++;
    }
  }
  
  // Programme principal qui prend un nombre en entrée et renvoie le premier nombre premier supérieur
  let n = parseInt(process.argv[2]);
  
  if (isNaN(n)) {
    console.log("Veuillez fournir un nombre en argument.");
  } else if(isPrime(n)===true){
    console.log(n + " est un nombre premier")
  }else {
    let next = nextPrime(n);
    console.log("Le premier nombre premier supérieur à", n, "est", next);
  }
  