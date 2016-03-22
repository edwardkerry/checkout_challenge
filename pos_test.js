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

    describe('discounted orders', function(){
      it('should offer 3 for 2 on A', function(){
        expect(checkout(['A', 'A', 'A'], prices)).toEqual(50)
      });
      it('should offer 3 for 100 on B', function(){
        expect(checkout(['B', 'B', 'B'], prices)).toEqual(100)
      });
      it('should only offer discounts on multiples of 3', function(){
        expect(checkout(['B', 'B', 'B', 'B', 'A','A','A','A',], prices)).toEqual(215)
      });
    });
    describe('full order', function(){
      it('should calculate the example order', function(){
        expect(checkout(['B', 'A', 'B', 'P', 'B'], {A: 25, B: 40, P: 30})).toEqual(155)
      });
    });
  });

});
