//Array.find(callback(element[, index[, array]])[, thisArg])
//Find a specific value inside of array with all your caracteristics
const employees = [
    { name: "David Carlson", age: 30 },
    { name: "John Cena", age: 34 },
    { name: "Mike Sheridan", age: 25 },
    { name: "John Carte", age: 50 }
   ];

const values= [1,3,6,3,8,9,17,2,4,7];

function finArray(employees){
    const worker = employees.find(function(worker){
        return worker.name.indexOf("John") > -1;
    })
    console.log(worker);
}

finArray(employees);