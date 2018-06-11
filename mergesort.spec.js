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
});

describe('MergeSort function', function(){
  it('is able to sort an array', function(){
    expect(mergeSort([2,5,3,7])).toEqual([2,3,5,7]);
  });
});

