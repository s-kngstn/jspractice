// console.log('Works')
'use strict'; //<-- strict mode
const currentYear = new Date().getFullYear();

function calcAge(birthYear){
  const age = currentYear - birthYear;

  function printAge(){
    console.log(firstName + " you are " + age);

    if (birthYear >= 1981 && birthYear <= 1996){
      var millenial = true;
      const str = `Oh, and you are a millenial, ${firstName}`
      console.log(str);

      function add(a, b){
        return a + b;
      }
      console.log(add(3, 2));
    }
    // console.log(str)
    console.log(millenial)
    // console.log(add(3, 2)); //<-- wont work in strict mode, out of scope bc function is in block scope(its in a conditional block)

  }

  printAge()
  return age;
}

const firstName = "Bob";
calcAge(1985);