function checkout(items, prices) {
  var cost = 0;
  var itemCount = {};
  var discount = 0;

  _calculateCost(items, prices);
  _countItems(items);
  _applyDiscounts();

  return cost - discount;

  function _calculateCost(items, prices) {
    items.forEach(function(item) {
      cost += prices[item];
    });
  };

  function _countItems(items) {
    return items.reduce(function(count, item) {
      count[item] = ++count[item] || 1;
      return count;
    }, itemCount);
  };

  function _applyDiscounts(){
    if ( itemCount['A'] ) { discount = Math.floor(itemCount['A'] / 3) * 25; }
    if ( itemCount['B'] ) { discount += Math.floor(itemCount['B'] / 3) * 20; }
  };
};

function Checkout(prices) {
  this.items = [];
  this.prices = prices;
};

Checkout.prototype.scan = function(itemCode) {
  itemCode in this.prices ? this.items.push(itemCode) : this.notForSale(itemCode);
};

Checkout.prototype.total = function() {
  return checkout(this.items, this.prices);
};

Checkout.prototype.notForSale = function(itemCode) {
  throw itemCode + ' is not for sale!'
};
