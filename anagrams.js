
function isAnagram(wordOne, wordTwo){
  let wordOneSorted = wordOne.toLowerCase().split('').sort().join('');;
  let wordTwoSorted = wordTwo.toLowerCase().split('').sort().join('');;

  if (wordOneSorted === wordTwoSorted){
    return true;
  } else {
    return false;
  }
}

const test1 = isAnagram('sean', 'barry'); // False
const test2 = isAnagram('fluster', 'restful'); // True
const test3 = isAnagram('eleVen plUs Two', 'tWelve plus onE'); // True
const test4 = isAnagram('SaNtA', 'SATan'); //True
console.log(test1, test2, test3, test4);
