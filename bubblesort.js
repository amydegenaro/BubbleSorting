// --------------- WORKING ------------

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
        if (array[j-1] > array[j]) {
          swap(array, j-1, j);
        }
      }
    }
    return array;
}

// swap in place
function swap(array, first, second) {
  const temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}


// ATTEMPT AT WRITING RECURSIVELY

// function bubbleSort(array) {
//   // const sortedArray = [];
//   if (array.length === 1) {
//     for (let i = 0; i < array.length-1; i++) {
//       if (array[i] > array[i + 1]) {
//         // update to swap in place
//         swap(array[i], array[i + 1]);
//       }
//       return array;
//     }
//   } else {
//     bubbleSort(array.slice(-1));
//   }
// }
