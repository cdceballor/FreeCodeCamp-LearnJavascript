//Array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
//reduce whatever value and the ouptut is only one value, object, string or number
const number= [1,2,3,4,5];

const coordinates = [
    { x: 1, y: 2 }, 
    { x: 2, y: 3 }, 
    { x: 3, y: 4 }
  ];
  

var reducer = () => {
    const newValue= number.reduce(function(newValue, number){
        return newValue + number;
    })
    console.log(newValue);
}
function coor(){
      const sum = coordinates.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.x;
  }, 0);
  console.log(sum); // 6
}
  
coor(number);
//reducer(number);