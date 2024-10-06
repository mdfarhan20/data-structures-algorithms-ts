// Repeatedly iterates over the array checking for unsorted consecutive pairs and swaps them

function bubbleSort(array: number[]) {
  // The last element will be in sorted order after each iteration
  for (let i = array.length - 1; i >= 0; i--) {
    let swapped = false;

    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) 
      break;
  }
}


const numbers = [3, 1, 4, 2, 1, 6, 5];
bubbleSort(numbers);
console.log(numbers);