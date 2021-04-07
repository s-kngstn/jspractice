///////////////////////////////////////////////////////////////////////////////
///////// Union Types  & Literal Types ///////////////////////////////////////

type Combinable = number | string; // <-- Type Aliases
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor){
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number'){
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}


const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

// Type aliases can be used to "create" your own types.
// Youre not limited to storing union types though - you can also provide an alias
// to a (possibly complex) object type.
// For example:
type User = { name: string; age: number };
const u1: User = { name: 'Bill', age: 44};

function greet(user: User){
  console.log('Hey, I am ' + user.name);
}

console.log(greet(u1));