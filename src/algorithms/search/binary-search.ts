function binarySearch<T>(array: T[], target: T): number {
  let start = 0, end = array.length - 1;
  
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

export default binarySearch;