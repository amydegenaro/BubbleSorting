function split(wholeArray) {
  // debugger;
  let mid = Math.floor(wholeArray.length/2);
  let firstHalf = wholeArray.slice(0,mid);
  let secondHalf = wholeArray.slice(mid);
  return [firstHalf, secondHalf];
}

function merge([firstHalf,secondHalf]) {
  debugger;
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < firstHalf.length && rightIndex < secondHalf.length){
    if(firstHalf[leftIndex] < secondHalf[rightIndex]){
      result.push(firstHalf[leftIndex]);
      leftIndex++
    } else {
      result.push(secondHalf[rightIndex]);
      rightIndex++
    }
  }

  return result.concat(firstHalf.slice(leftIndex)).concat(secondHalf.slice(rightIndex));
}

// FOR DEBUGGING
// merge([[2,5], [3, 7]])

function mergeSort(array) {
  debugger;
  if(array.length===1){
    return array;
  } else {
    const splitArray = split(array);
    return merge([mergeSort(splitArray[0]), mergeSort(splitArray[1])])
  }
}

// FOR DEBUGGING
// mergeSort([9,8,7,6,5])
