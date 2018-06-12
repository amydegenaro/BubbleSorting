describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([2,5,7,3])).toEqual([[2,5],[7,3]]);
  });

  it('is able to split an odd length array', function(){
    expect(split([7,5,0,2,4])).toEqual([[7,5],[0,2,4]]);
  })
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([[2,5], [3,7]])).toEqual([2,3,5,7]);
  });

  it('is able to merge two uneven length sorted arrays into one sorted array', function(){
    expect(merge([[1,2,5], [3,7]])).toEqual([1,2,3,5,7]);
  });
});

describe('MergeSort function', function(){
  it('is able to sort an array', function(){
    expect(mergeSort([2,5,3,7])).toEqual([2,3,5,7]);
  });

  it('is able to sort an of length 1', function(){
    expect(mergeSort([2])).toEqual([2]);
  });

  it('is able to sort an array of length 2', function(){
    expect(mergeSort([5,3])).toEqual([3,5]);
  });

  it('is able to sort an odd length array', function(){
    expect(mergeSort([9,8,7,6,5])).toEqual([5,6,7,8,9]);
  });

});

