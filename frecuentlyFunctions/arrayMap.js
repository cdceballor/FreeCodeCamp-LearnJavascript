//Array.map(function callback(currentValue[, index[, array]]) {
    // Return element for a new_array with new properties or not
//}[, thisArg])

const users = [
    {
      first_name: 'Mike',
      last_name: 'Sheridan'
    },
    {
      first_name: 'Tim',
      last_name: 'Lee'
    },
    {
      first_name: 'John',
      last_name: 'Carte'
    }
  ];

const toU = ["cristian", "sor claret", "frederik"];
function arrayMapping(users){
    const newUsers = users.map(function(user){
        return user.first_name + " " + user.last_name;
    })
    console.log(newUsers);
}

var maping= (users) => {
    const newUsers=users.map(function(user){
        return user.first_name + " " + user.last_name;
    })
    console.log(newUsers);
}

function toUpper(toU){
    const newUpper = toU.map(function(upper){
        return upper.toUpperCase();
    })
    console.log(newUpper);
}
//arrayMapping(users);
//maping(users);
toUpper(toU);