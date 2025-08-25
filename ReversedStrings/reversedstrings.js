//Complete the solution so that it reverses the string passed into it.
//
//'world'  =>  'dlrow'
//'word'   =>  'drow'

function solution(str){
  let myString = str.split("");
  let myStringReversed = myString.reverse();
  let joinArray = myStringReversed.join("");
  return joinArray;
}
solution('world');
solution('word');