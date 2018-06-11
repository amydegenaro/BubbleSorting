describe('Bubble Sort', function(){

  beforeAll(function () {

    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });

  it('swapping an array in order takes exactly 0 swaps', function () {
    const arrayTest = [2,5,6];
    bubbleSort(arrayTest);
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('swapping an array out of order takes the correct amount of swaps', function () {
    const arrayTest = [9,2,1,5,6,4];
    // [2,1,5,6,4,9] = 5
    // [1,2,5,4,6,9] = 2
    // [1,2,4,5,6,9] = 1
    bubbleSort(arrayTest);
    expect(window.swap.calls.count()).toEqual(8);
  });


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
