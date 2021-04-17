//Array.findIndex(callback(element[, index[, array]])[, thisArg])
//Found a value inside of an array
const employees = [
    { name: 'David Carlson', age: 30 },
    { name: 'John Cena', age: 34 },
    { name: 'Mike Sheridan', age: 25 },
    { name: 'John Carte', age: 50 }
  ];

var foundIndex = (employees) =>{
    const index = employees.findIndex(function(employees){
        return employees.name.indexOf("Merli") > -1;
    })
    console.log(index);
}
foundIndex(employees);