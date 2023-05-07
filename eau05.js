let arguments = process.argv.slice(2)
const baseString = arguments[0];
const subString = arguments[1]

function isContainingSubstring(base, sub){
 var isContained = false;

 for(let i = 0; i <= base.length - sub.length;i++){
    if(!isContained){
        let grouper = '';
        for(let x = i; x < i + sub.length;x++){
            grouper +=base[x];
        }
        if(grouper === sub){
            isContained = true;
            break;
        }
    }
 }
 return isContained;
}
 

    console.log(isContainingSubstring(baseString,subString));
