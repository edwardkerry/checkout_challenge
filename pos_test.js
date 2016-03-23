describe('Point of Sale', function(){
  var prices;

  beforeEach(function(){
    prices = {
      A: 25,
      B: 40,
      P: 30
    }
  });

  describe('Checkout function', function(){
    describe('normal orders', function(){
      it('should return a single item\'s cost', function(){
        expect(checkout(['A'], prices)).toEqual(25)
      });

      it('should return multiple item\'s cost', function(){
        expect(checkout(['A', 'B'], prices)).toEqual(65)
      });
    });

    describe('discounted orders', function(){
      it('should offer but 2 get 1 free on item A', function(){
        expect(checkout(['A', 'A', 'A'], prices)).toEqual(50)
      });
      it('should offer 3 for 100 on item B', function(){
        expect(checkout(['B', 'B', 'B'], prices)).toEqual(100)
      });
      it('should only offer discounts on multiples of 3', function(){
        expect(checkout(['B', 'B', 'B', 'B', 'A','A','A','A',], prices)).toEqual(215)
      });
    });

    describe('full order', function(){
      it('should calculate the example order', function(){
        expect(checkout(['B', 'A', 'B', 'P', 'B'], prices)).toEqual(155)
      });
    });

    describe('incorrect order', function(){
      it('should not process unsold orders', function(){
        expect(function(){checkout(['F'], prices)}).toThrow('F is not for sale!');
      });
    });
  });

  describe('Checkout object', function(){

    var checkout;

    beforeEach(function(){
      checkout = new Checkout(prices);
    });

    describe('CO', function(){
      it('should have a scan function', function(){
        expect(checkout.scan).toBeDefined();
      });
      it('should have a total function', function(){
        expect(checkout.total).toBeDefined();
      });
      it('should have an order object', function(){
        expect(checkout.order).toBeDefined();
      });
    });
  });

});
