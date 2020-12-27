let basket = [10, 12, 14];

document.write(countBasketPrice(basket));

function countBasketPrice(basket){
  return basket.reduce(function (acc, item) {
    return acc += item;
  })
}
