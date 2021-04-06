function add(n1: number, n2: number, showResult: boolean, phrase: string){
  const result = n1 + n2;
  if (showResult){
    console.log(phrase + result);
  } else {
    return result;
  }
}

let userName: string;
const firstNumber = 5;
const secondNumber = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
userName = "Bobby3000";

add(firstNumber, secondNumber, printResult, resultPhrase);