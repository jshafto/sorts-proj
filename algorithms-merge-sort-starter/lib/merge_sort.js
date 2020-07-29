function merge(array1, array2) {
  // var result as array
  let result = [];
  // while ( a and b have elements )
  while (array1.length > 0 && array2.length > 0) {
    if ( array1[0] > array2[0] ) {
      //     add b[0] to the end of result
      result.push(array2.shift());
      //     remove b[0] from b
    } else {
      //     add a[0] to the end of result
      result.push(array1.shift())
      //     remove a[0] from a
      //   end if
    }
    // end while
  }

  while (array1.length > 0) {
    result.push(array1.shift());
  }
  //   add a[0] to the end of result
  //   remove a[0] from a
  // end while

  while (array2.length > 0) {
    result.push(array2.shift());
  }
  // while ( b has elements )
  //   add b[0] to the end of result
  //   remove b[0] from b
  // end while

  return result;
}

function mergeSort(array) {
  if ( array.length <= 1 ) return array;

  // /* Split the array into two */
  let l1 = array.slice(0, Math.floor(array.length / 2));
  // var l1 as array = a[0] ... a[n/2]
  let l2 = array.slice(Math.floor(array.length / 2));
  // var l2 as array = a[n/2+1] ... a[n]

  l1 = mergeSort( l1 );
  l2 = mergeSort( l2 );

  return merge( l1, l2 );
}

module.exports = {
  merge,
  mergeSort
};
