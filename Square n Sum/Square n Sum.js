function squareSum(numbers){
  let squaredArr = numbers.map(num => num * num);
  return squaredArr.reduce(function(acc, curr) {
    return acc += curr;
  }, 0);
}