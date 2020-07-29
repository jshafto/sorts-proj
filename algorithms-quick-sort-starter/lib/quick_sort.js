function quickSort(array) {
  // if the length of the array is 0 or 1, return the array
  if(array.length <= 1) return array;
  // set the pivot to the first element of the array
  // remove the first element of the array
  let pivot = array.shift();

  // put all values less than the pivot value into an array called left
  // put all values greater than the pivot value into an array called right
  let left = [];
  let right = [];

  while(array.length > 0) {
    let ele = array.shift();
    if(ele > pivot) {
      right.push(ele);
    } else {
      left.push(ele);
    }
  }
  // call quick sort on left and assign the return value to leftSorted
  let leftSorted = quickSort(left);
  // call quick sort on right and assign the return value to rightSorted
  let rightSorted = quickSort(right);

  // return the concatenation of leftSorted, the pivot value, and rightSorted
  return [...leftSorted, pivot, ...rightSorted];
}


module.exports = {
  quickSort
};
