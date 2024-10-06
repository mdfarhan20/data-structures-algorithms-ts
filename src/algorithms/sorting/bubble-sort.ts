// Repeatedly iterates over the array checking for unsorted consecutive pairs and swaps them
function bubbleSort(array: number[]) {
  while (true) {
    let swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
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