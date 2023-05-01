let arguments = process.argv;
arguments.shift();
arguments.shift();
let arrayReversed =[]
if(arguments.length < 2){
    console.log("2 arguments sont requis");
}else{

for(i = arguments.length; i > 0; i--){
    arrayReversed.push(arguments[i-1]);
    console.log(arguments[i-1])
}

};