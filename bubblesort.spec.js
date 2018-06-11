describe('Bubble Sort', function(){

  // beforeAll(function () {
  //   const array = [2,5,6];

  //   spyOn(bubbleSort, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  // });
  // it('swapping an array in order takes exactly 0 swaps', function () {
  //   bubbleSort(array);
  //   expect(bubbleSort.swap.calls.count()).toEqual(0);
  // });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an single item array', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles a two item array', function(){
    expect( bubbleSort([8,2]) ).toEqual( [2,8] );
  });

  it('handles an multiple item array', function(){
    expect( bubbleSort([4,8,2,3,9]) ).toEqual( [2,3,4,8,9] );
  });
});
