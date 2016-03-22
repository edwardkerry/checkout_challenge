describe('Point of Sale', function(){
  var prices;

  beforeEach(function(){
    prices = {
      A: 25,
      B: 40,
      P: 30
    }
  });

  describe('checkout function', function(){
    describe('normal orders', function(){
      it('should return a single order\'s sum', function(){
        expect(checkout(['B'], prices)).toEqual(40)
      });

      it('should return multiple order\'s sum', function(){
        expect(checkout(['B', 'A'], prices)).toEqual(65)
      });
    });
  });

});
