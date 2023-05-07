const regex = /[^0-9]/;
const inputString = process.argv[2];
if (regex.test(inputString)) {
  console.log("La chaîne de caractères contient des caractères qui ne sont pas des nombres.");
} else {
  console.log("La chaîne de caractères ne contient que des nombres.");
}
