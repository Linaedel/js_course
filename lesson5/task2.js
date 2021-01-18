let basket = {
  basketElements: [],

  countBasketPrice() {
      return this.basketElements.reduce(function (acc, item) {
      return acc += item.price;
    }, 0)
  },

  addProduct(product) {
    this.basketElements.push(product);
  },
  
  length() {
    return this.basketElements.length;
  }
}

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function printBasket(basket) {
  let basketContainer = document.querySelector('.basket');
  basketContainer.textContent = '';
  let p = document.createElement('p')
  if (basket.length() == 0) {
      p.textContent = 'Корзина пуста';
  } else {
      p.textContent = 'В корзине ' + basket.length()  + ' товаров на сумму ' + basket.countBasketPrice() + ' рублей';
  }
  basketContainer.appendChild(p);
}

printBasket(basket); 
basket.addProduct(new Product("Товар1", 100));
basket.addProduct(new Product("Товар2", 150));
basket.addProduct(new Product("Товар2", 152));

setTimeout(() => {
  printBasket(basket);
}, 5000);
