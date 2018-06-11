function split(wholeArray) {
  debugger;
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
    } else if (firstHalf[leftIndex] > secondHalf[rightIndex]){
      result.push(secondHalf[rightIndex]);
      rightIndex++
    }
  }

  return result.concat(firstHalf.slice(leftIndex)).concat(secondHalf.slice(rightIndex));
}

// merge([[2,5], [3, 7]])

function mergeSort(array) {
  debugger;
  if(array.length===1){
    return array
  } else {
    let firstHalf = split()[0]
    let secondHalf = split()[1]
    return mergeSort(merge([firstHalf, secondHalf]))
  }
}
mergeSort([2,5,3,7])
