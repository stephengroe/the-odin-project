function mergeSort(array) {
  if (array.length === 0) { return []; };
  if (array.length === 1) { return array; }

  // Split into arrays of a single value
  const midPoint = Math.floor(array.length / 2);
  const firstHalf = mergeSort(array.slice(0, midPoint));
  const secondHalf = mergeSort(array.slice(midPoint, array.length));

  // Add lower half to new array
  const newArray = [];
  while (firstHalf.length && secondHalf.length) {

    if (firstHalf[0] > secondHalf[0]) {
      newArray.push(secondHalf.shift());
    } else {
      newArray.push(firstHalf.shift());
    }
  }

  // Push any remaining single items
  newArray.push(firstHalf, secondHalf);
  return newArray.flat(Infinity);
}

console.log(mergeSort([])); // []
console.log(mergeSort([1])); // [1]
console.log(mergeSort([2, 1])); // [1, 2]
console.log(mergeSort([5, 4, 9, 3])); // [3, 4, 5, 9]
console.log(mergeSort([5, 4, 9, 3, 2])); // [2, 3, 4, 5, 9]
console.log(mergeSort([5, 4, 9, 3, 2, 1, 6, 8, 7, 0])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]