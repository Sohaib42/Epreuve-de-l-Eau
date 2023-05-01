let argument = process.argv;
let n = argument[2];
let i = 0
let fibonacciStart=[0,1];
if(n==0){
    console.log(0);
}else if(n==1){
    console.log(1);
}else if(n < 0 || isNaN(n)){
    console.log(-1);
}
else{
    while(i < n){
        fibonacciStart.push(fibonacciStart[i] + fibonacciStart[i+1]);
        i++
    }
    console.log(fibonacciStart[fibonacciStart.length-2]);
}
