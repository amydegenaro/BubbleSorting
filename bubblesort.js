function bubbleSort(array) {
  // const sortedArray = [];
  if (array.length === 1) {
    for (let i = 0; i < array.length-1; i++) {
      if (array[i] > array[i + 1]) {
        // update to swap in place
        return array.concat(swap(array[i], array[i + 1]));
      }
    }
  } else {
    bubbleSort(array.slice(-1));
  }
}


// swap in place instead
function swap(val1, val2) {
  return [val2, val2];
}


// function swap(array, i, j){
//   let temp = array[i];
//   array[i] = array[j];
//   array[j] = temp
// }

// while (i < array.length) {
//   i++
// }
