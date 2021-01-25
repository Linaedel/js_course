let basket = {
  basketElements: [],

  countBasketPrice() {
      return this.basketElements.reduce(function (acc, item) {
      return acc += item.price;
    }, 0)
  },

  addProduct(product) {
    this.basketElements.push(product);
  }
}

function Product(name, price) {
  this.name = name;
  this.price = price;
}

basket.addProduct(new Product("Товар1", 100));
basket.addProduct(new Product("Товар2", 150));
basket.addProduct(new Product("Товар2", 152));

document.write("Сумма товаров в корзине: " + basket.countBasketPrice());