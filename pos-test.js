describe('Point of Sale', function(){
  var prices;

  beforeEach(function(){
    prices = {
      A: 25,
      B: 40,
      P: 30
    };
  });

  describe('Checkout function', function(){
    describe('normal orders', function(){
      it('should return a single item\'s cost', function(){
        expect(checkout(['A'], prices)).toEqual(25);
      });

      it('should return multiple item\'s cost', function(){
        expect(checkout(['P','P'], prices)).toEqual(60);
      });
    });

    describe('discounted orders', function(){
      it('should offer buy 2 get 1 free on item A', function(){
        expect(checkout(['A', 'A', 'A'], prices)).toEqual(50);
      });
      it('should offer 3 for 100 on item B', function(){
        expect(checkout(['B', 'B', 'B'], prices)).toEqual(100);
      });
      it('should only offer discounts on multiples of 3', function(){
        expect(checkout(['B', 'B', 'B', 'B', 'A','A','A','A',], prices)).toEqual(215);
      });
    });

    describe('full order', function(){
      it('should calculate the example order', function(){
        expect(checkout(['B', 'A', 'B', 'P', 'B'], prices)).toEqual(155);
      });
    });
  });

  describe('Checkout object', function(){

    var checkout;

    beforeEach(function(){
      checkout = new Checkout(prices);
    });

    describe('#scan', function(){
      it('should add item codes to the order', function(){
        checkout.scan('A');
        checkout.scan('P');
        checkout.scan('B');
        expect(checkout.items).toEqual(['A', 'P', 'B']);
      });
      it('should not add an invalid item', function(){
        expect(function(){checkout.scan('F')}).toThrow('F is not for sale!');
      });
    });

    describe('#total', function(){
      it('should calculate the current price', function(){
        checkout.scan('A');
        checkout.scan('A');
        expect(checkout.total()).toEqual(50);
        checkout.scan('B');
        checkout.scan('A');
        checkout.scan('B');
        expect(checkout.total()).toEqual(130);
        checkout.scan('B');
        checkout.scan('P');
        checkout.scan('B');
        expect(checkout.total()).toEqual(220);
      });
    });
  });
});
