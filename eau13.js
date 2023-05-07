let arguments = process.argv.slice(2);
let n = arguments.length;
for (i = 0; i < n-1;i++){
    let minIndex = i;
    for(let j = i +1; j < n-1;j++){
        if(arguments[j] < arguments[minIndex]){
            minIndex = j;
        }
    }
    if(minIndex != i){
        let temp = arguments[i];
        arguments[i] = arguments[minIndex];
        arguments[minIndex] = temp;

    }
}
console.log(arguments)