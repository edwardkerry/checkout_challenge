var checkout = function(items, prices){
  var totalCost = 0;

  items.forEach(function(item){
    totalCost += prices[item]
  });

  return totalCost;
};
