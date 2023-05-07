let arguments = process.argv.slice(2);

for(i = 0;i < arguments.length -1 ; i++){
    for(j = i+1;j<arguments.length;j++){
        if(arguments[j]<arguments[i]){
            let temp = arguments[i];
            arguments[i] = arguments[j];
            arguments[j] = temp;
        }
    }
}
console.log(arguments.join(" "));