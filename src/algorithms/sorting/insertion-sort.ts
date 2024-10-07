// Selects one element at a time and inserts it in the correct position

// Complexity Analysis
// Time Complexity: O(n^2) - Worst Case
// Time Complexity: O(n) - Best Case
// Space Complexity: O(1)

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