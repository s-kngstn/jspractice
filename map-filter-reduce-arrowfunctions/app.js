
///////////////////// MAP ////////////////////////
//Map - Create a new array by doing something with each item in an array.
// Map is going to expect another function inside of it.
// The function we pass in is going to determine, what we want to do this each item. <--- THIS
// MAP WILL RETURN AN ARRAY // FOR EACH YOU NEED TO MAKE AN EMPTY ARRAY
// function double(x){
//   return x * 2;
// }
// const output = numbers.map(double);
// console.log(output); // output of numbers = [6, 112, 4, 96, 10];
// // BELOW IS THE EQUIVALENT OF MAP, BUT WITH FOR EACH
// const newNum = [];
// numbers.forEach(function(x){
//   newNum.push(x * 2);
// });
// console.log(newNum);
///--------------------------------------------------////


/////////////////////// FILTER //////////////////////////
//Filter - Create a new array by only keeping the items that return true.    

// const output = numbers.filter(function(num){
  // return (typeof num === "string");
// });

// console.log(output); /// Will return only strings from the array
//----------------------------------------------------///////


// /////////////////////// REDUCE ////////////////////////////////
// //Reduce - Accumulate a value by doing something to each item in an array.
// //THE REDUCE FUNCTION TAKES THE TOTAL AMOUNT OF AN ARRAY AND REDUCES IT DOWN TO A SINGLE SUM AMOUNT
// const num = [1,2,3,5];
// num.reduce(function(accumulator, currentNumber){
//   return accumulator * currentNumber;
// });
// var newNum = numbers.reduce(function(accumulator, currentNumber){
//   return accumulator + currentNumber;
// })
// console.log(newNum) // RETURNS THE TOTAL SUM OF THE LIST 114.
// ///---------------------------------------------------------////

// const numbers = [3, 56, 2, 48, 5];
// ///////////////////////// FIND ///////////////////////////////////
// //Find - find the first item that matches from an array.
// const newNum = numbers.findIndex(function (num){
//   return num > 10;
// });
// console.log(newNum) // find returns 56 findIndex returns 1 (the numbers index in the array)
// //FindIndex - find the index of the first item that matches.

/// Arrow funtions are a shorter way of writing functions
/// Arrow functions a syntactic sugar

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => { return x * 2 });
console.log("Here " + newNumbers)

//////Filter - Create a new array by keeping the items that return true.
const newNumbersFilter = numbers.filter(num => num < 10);
console.log(newNumbersFilter);
//Reduce - Accumulate a value by doing something to each item in an array.
var newNumberReduce = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);
console.log(newNumberReduce);

////Find - find the first item that matches from an array.
const newNumberFind = numbers.find(num => {
  return num > 10;
});
console.log(newNumberFind);

////FindIndex - find the index of the first item that matches.
const newNumberFindIndex = numbers.findIndex(num => num > 10);
console.log(newNumberFindIndex);


const newSquared = numbers.map((x) => {
  return x * x;
});
console.log(newSquared);
