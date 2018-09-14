module.exports = function solveEquation(equation) {
  // your implementation
  var solutions = [], numbers = [];
  var array = equation.split(' ');
  for(var n = 0; n < array.length; n++){
    if(array[n] === '-') array[n+1] ="-" + array[n+1];
  }
  for(var n = 0; n < array.length; n++){
    if(parseInt(array[n])) numbers.push(parseInt(array[n]));
  }
  numbers[1] /= numbers[0];
  numbers[2] /= numbers[0];
  solutions.push(1/2*(-numbers[1]-Math.sqrt(Math.pow(numbers[1],2)-4*numbers[2])));
  solutions.push(1/2*(-numbers[1]+Math.sqrt(Math.pow(numbers[1],2)-4*numbers[2])));
  return solutions;
}
