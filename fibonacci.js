function getFibonacci(num) {
  if (num < 0) { return "Error: Invalid number!"; }
  if (num <= 2) { return [0, 1]; }
  
  let resultArray = getFibonacci(num - 1);
  resultArray.push(resultArray[resultArray.length - 1] + resultArray[resultArray.length - 2]);

  return resultArray;
}

console.log(getFibonacci(-5)); // Error: Invalid number!
console.log(getFibonacci(2)); // [0, 1]
console.log(getFibonacci(5)); // [0, 1, 1, 2, 3]
console.log(getFibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]