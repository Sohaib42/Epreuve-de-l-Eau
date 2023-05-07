const arg1 = process.argv[2];
const arg2 = process.argv[3];


if(arg1 > arg2){
    for(i=0;i < arg1-arg2;i++){
        console.log(parseInt(arg2)+i);
    }
}    
else if(arg1 < arg2){
    for(i=0;i < arg2-arg1;i++){
        console.log(parseInt(arg1)+i);
    }
}
else{
    console.log("Erreur");
}

