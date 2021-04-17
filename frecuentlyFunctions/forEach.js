//Array.forEach(callback(currentValue [, index [, array]])[, thisArg]);
//It's a kind of normal for but in one line

monts = ["January","February","March","April","May","June","July","August","September", "October", "November", "December"];
var nm =0;
var arrowFunction=(month)=> {
monts.forEach(month => {
    console.log(month);
    nm+=1;
    },
)
console.log(nm);
}

function withoutAF(month){
    monts.forEach(function(month){
        console.log(month);
        nm+=1;
    }
)
console.log(nm);
}

arrowFunction(monts);
//withoutAF();