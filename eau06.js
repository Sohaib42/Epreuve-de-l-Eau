function capitalizeAlternateLetters(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
      const c = string[i];
      if (/[a-zA-Z]/.test(c) && i % 2 === 0) {
        result += c.toUpperCase();
      } else {
        result += c;
      }
    }
    return result;
  }
  
  const inputString = process.argv[2];
  if (!inputString || typeof inputString !== "string") {
    console.log("error");
    process.exit(1);
  }
  
  const outputString = capitalizeAlternateLetters(inputString);
  console.log(outputString);
  