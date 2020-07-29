// Try to implement swap on your own, this time.
function swap(arr, index1, index2) {
  let tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
}

function selectionSort(list) {
  // list  : array of items
  // n     : size of list
    let n = list.length;
  //
  // for i = 1 to n - 1
    for(let i = 0; i < n; i++) {

      // /* set current element as minimum*/
      //    min = i
      let min = i;
      //
      //    /* check the element to be minimum */
      //
      //    for j = i+1 to n
        for(let j = i + 1; j < n; j++) {

          //       if list[j] < list[min] then
          if (list[j] < list[min]) {

            //          min = j;
            min = j;
            //       end if
          }
          //    end for
        }
      //
      //    /* swap the minimum element with the current element
      //       using the above swap function*/
      //    if indexMin != i  then
          if (min !== i) {
      //       swap list[min] and list[i]
            swap(list, min, i);
          }
      //    end if
      // end for
    }

    return list;
}

module.exports = {
  selectionSort,
  swap
};
