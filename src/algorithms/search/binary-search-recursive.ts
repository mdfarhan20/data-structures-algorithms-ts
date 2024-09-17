function binarySearchRecursive<T>(array: T[], target: T, start=0, end=array.length-1): number {
  if (start > end) return -1;
  
  const middle = Math.floor((start + end) / 2);
  if (array[middle] === target) {
    return middle;
  } else if (array[middle] < target) {
    return binarySearchRecursive(array, target, middle + 1, end);
  } else {
    return binarySearchRecursive(array, target, start, middle - 1);
  }
}

export default binarySearchRecursive;