//  Array.some(callback(element[, index[, array]])[, thisArg]
//It's like the every but not with all the test/cases
const employees = [
    { name: "David Carlson", age: 30 },
    { name: "John Cena", age: 34 },
    { name: "Mike Sheridan", age: 25 },
    { name: "John Carte", age: 50 }
   ];

const values = [1,-3,54,7,-3,5,-8,87];
function some(values){
    const newValue = values.some(function (values){
        return values > 0;
    })
    console.log(newValue);
}

var worker =(employees)=>{
    const newString = employees.some(function (employees){
        return employees.name == "John Cena";
    })
    console.log(newString);
}

var workerWithIndex =(employees)=>{
    const newString = employees.some(function (employees){
        return employees.name.indexOf("John")>-1;
    })
    console.log(newString);
}
some(values);
worker(employees);
workerWithIndex(employees);