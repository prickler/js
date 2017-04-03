describe('Pierwszy test', function(){
    var testVariable = 'test';

    it('assert first thing', function(){
        expect(testVariable).toEqual('test');
    });
    //   expect(object.attribute).toEqual(false);
    // expect(currStartingSymbol).not.toEqual(false);
       it('assert zmienna currStartingSymbol', function(){
        expect(currStartingSymbol).toEqual(false);
    });
});