//Array.filter(callback(element[, index[, array]])[, thisArg])
//It's a good way to create a new array with specifications, filter a specific value/variable
const employees = [
    { name: 'David Carlson', age: 30 },
    { name: 'John Cena', age: 34 },
    { name: 'Mike Sheridan', age: 25 },
    { name: 'John Carte', age: 50 }
  ];
const values = [1,2,5,7,3,8,78,23,85,1];

function arrayF(employees){
    const newArray = employees.filter(function(newArray){
        return newArray.name.indexOf("John") > -1;
    })
    console.log(newArray);
}

var value = (employees) =>{
    const newValue = values.filter(function(newValue){
        return newValue >5;
    })
    console.log(newValue);
}
//arrayF(employees);
value(values);