//Array.every(callback(element[, index[, array]])[, thisArg])
//true if all test are true, false in other case, very usefull in forms
const values = [1,2,5,7,3,8,78,23,85,1];

function every(values){
    const allPositive= values.every(function(values){
        return values > 0;
    })
    console.log(allPositive);
}

every(values);