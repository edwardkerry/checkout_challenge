var checkout = function(items, prices){
  var totalCost = 0;
  var discountA = 0;
  var discountB = 0;
  var totalDiscount = 0;

  items.forEach(function(item){
    totalCost += prices[item];
    _trackDiscounts(item);
  });

  _applyDiscounts();

  return totalCost - totalDiscount;

  function _trackDiscounts(item){
    if(item === 'A') { discountA += 1 };
    if(item === 'B') { discountB += 1 };
  };

  function _applyDiscounts(){
    while(discountA > 2){
      if(discountA % 3 == 0){
        totalDiscount += 25;
      };
      discountA --;
    }
    while(discountB > 2){
      if(discountB % 3 == 0){
        totalDiscount += 20;
      };
      discountB --;
    }
  };

};
