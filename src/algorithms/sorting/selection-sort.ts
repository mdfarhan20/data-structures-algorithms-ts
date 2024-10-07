// Selects the smallest element and brings it to the front by swapping

// Complexity Analysis
// Time Complexity: O(n^2) - Worst Case
// Time Complexity: O(n^2) - Best Case
// Space Complexity: O(1)

function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min])
        min = j;
    }

    const temp = array[min];
    array[min] = array[i];
    array[i] = temp;
  }
}

const numbers = [3, 1, 4, 2, 1, 6, 5];
selectionSort(numbers);
console.log(numbers);