function getFibonacci(num) {
  if (num < 0) {return "Error: negative number!";}
  if (num <= 1) { return [0, 1];}
  
  const resultArray = getFibonacci(num - 1);
  resultArray.push(resultArray[resultArray.length - 1] + resultArray[resultArray.length - 2])
  return resultArray;
}

console.log(getFibonacci(-5)); // Error: negative number!
console.log(getFibonacci(1)); // [0]
console.log(getFibonacci(5)); // [0, 1, 1, 2, 3]
console.log(getFibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
