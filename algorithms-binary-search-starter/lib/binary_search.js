function binarySearch(list, target) {
  // parameter list: a list of sorted value
  // parameter target: the value to search for

  // if the list has zero length, then return false
  if (list.length === 0) return false;
  // determine the slice point:
  // if the list has an even number of elements,
  //   the slice point is the number of elements
  //   divided by two
  // if the list has an odd number of elements,
  //   the slice point is the number of elements
  //   minus one divided by two
  let slicePoint;
  if (list.length % 2 === 0) {
    slicePoint = list.length/2;
  } else {
    slicePoint = (list.length - 1)/2;
  }

  // create an list of the elements from 0 to the
  //   slice point, not including the slice point,
  //   which is known as the "left half"
  let leftHalf = list.slice(0, slicePoint);
  // create an list of the elements from the
  //   slice point to the end of the list which is
  //   known as the "right half"
  let rightHalf = list.slice(slicePoint+1);

  // if the target is less than the value in the
  //   original array at the slice point, then
  //   return the binary search of the "left half"
  //   and the target
  if (target < list[slicePoint]) {
    return binarySearch(leftHalf, target);
  } else if (target > list[slicePoint]) {
    return binarySearch(rightHalf, target);
  } else {
    return true;
  }

  // if the target is greater than the value in the
  //   original array at the slice point, then
  //   return the binary search of the "right half"
  //   and the target

  // if neither of those is true, return true
}

function binarySearchIndex(list, target, low = 0, high = list.length-1) {

  // parameter list: a list of sorted value
  // parameter target: the value to search for
  // parameter low: the lower index for the search
  // parameter high: the upper index for the search

  // if low is equal to high, then return -1 to indicate
  //   that the value was not found
  //console.log('high: ', high, 'low: ', low)

  if (low === high) return -1;

  // determine the slice point:
  //   if the list between the high index and the low index
  //   has an even number of elements,
  //     the slice point is the number of elements
  //     between high and low divided by two
  //   if the list between the high index and the low index
  //   has an odd number of elements,
  //     the slice point is the number of elements
  //     between high and low minus one, divided by two


  let slicePoint = Math.floor((high + low) / 2);
  // console.log('high: ', high, 'low: ', low, 'slicePoint: ', slicePoint)

  //    low = 2   high = 7
        //2 - 7 = 5 / 2 2.5 2
  // if the target is less than the value in the
  //   original array at the slice point,
  if (target < list[slicePoint]) {
    return binarySearchIndex(list, target, low, slicePoint);
  //then
  //   return the binary search of the array,
  //   the target, low, and the slice point
  } else if (target > list[slicePoint]) {
    return binarySearchIndex(list, target, slicePoint+1, high);
  } else {
    return slicePoint;
  }
  // if the target is greater than the value in the
  //   original array at the slice point, then return
  //   the binary search of the array, the target,
  //   the slice point plus one, and high
  // if neither of those is true, return the slice point
}
// console.log(binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 12));
module.exports = {
  binarySearch,
  binarySearchIndex
};
