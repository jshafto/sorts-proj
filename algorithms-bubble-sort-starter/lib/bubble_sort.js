function swap(array, idx1, idx2) {
  let temp = array[idx1];     // save a copy of the first value
  array[idx1] = array[idx2];  // overwrite the first value with the second value
  array[idx2] = temp;         // overwrite the second value with the first value
}

// Use this pseudocode to implement the bubble sort
function bubbleSort(array) {
  // n := length(array)
  let n = array.length;
  let noSwapped = false;
  // repeat
  // for (let j = 0; j < n; j++) {
  //   if(noSwapped) continue;
  while (noSwapped === false) {
    noSwapped = true;
    //  for i := 1 to n - 1 inclusive do
    for (let i = 1; i < n; i ++) {
      //
      //     /* if this pair is out of order */
      //     if A[i - 1] > A[i] then
      if (array[i - 1] > array[i]) {
        //       /* swap them and remember something changed */
        //       swap(A[i - 1], A[i])
        swap(array, i-1, i);
        //       swapped := true
        noSwapped = false;
        //
        //     end if
      }
      //

      //   end for
    }
  // until not swapped
  }
  return array;
}


module.exports = {
  bubbleSort,
  swap
};
