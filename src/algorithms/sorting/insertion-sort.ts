// Selects one element at a time and inserts it in the correct position
function insertionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let j = i - 1, num = array[i];
    while (j >= 0) {
      if (array[j] <= num) break;
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = num;
  }
}

const numbers = [3, 1, 4, 2, 1, 6, 5];
insertionSort(numbers);
console.log(numbers);