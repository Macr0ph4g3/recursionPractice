function mergeSort(array){
    if (array.length < 2) {
      return array
    }
    else {
      let halfLength = Math.ceil(array.length / 2);
      let leftHalf = array.slice(0,halfLength)
      let rightHalf = array.slice(halfLength,array.length)
      return mergeArrays(mergeSort(leftHalf),mergeSort(rightHalf))
    }
  }
function mergeArrays(lefthalf, righthalf) {
  let newArray = [];

  while (lefthalf.length > 0 && righthalf.length > 0) {
    if (lefthalf[0] <= righthalf[0]) {
      newArray.push(lefthalf.shift());
    } else {
      newArray.push(righthalf.shift());
    }
  }

  // append the remaining elements from the non-empty half
  newArray = newArray.concat(lefthalf).concat(righthalf);

  return newArray;
}

console.log(mergeSort([3]))