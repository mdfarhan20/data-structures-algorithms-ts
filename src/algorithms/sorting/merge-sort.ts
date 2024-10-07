// Repeatedly splits the array into halves and sorts them by merging the split arrays

// Complexity Analysis
// Time Complexity: O(n*log(n)) - Worst Case
// Time Complexity: O(n*log(n)) - Best Case
// Space Complexity: O(n)

function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const firstHalf = mergeSort(array.slice(0, middle));
  const secondHalf = mergeSort(array.slice(middle));

  return mergeArray(firstHalf, secondHalf);
}

function mergeArray(array1: number[], array2: number[]): number[] {
  const mergedArray: number[] = [];

  let i = 0, j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }

  // If any elements left in array1
  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }

  // If any elements left in array2
  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }

  return mergedArray;
}

const numbers = [3, 1, 4, 2, 1, 6, 5];
const sortedArray = mergeSort(numbers);
console.log(sortedArray);