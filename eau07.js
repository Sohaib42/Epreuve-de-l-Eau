
function capitalizeFirstLetters(string) {
    const words = string.split(/\s+/);
    const capitalizedWords = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord;
    });
    return capitalizedWords.join(" ");
  }
  
  
  const inputString = process.argv[2];
  if (!inputString || typeof inputString !== "string") {
    console.log("error");
    process.exit(1);
  }
  
  const outputString = capitalizeFirstLetters(inputString);
  console.log(outputString);  