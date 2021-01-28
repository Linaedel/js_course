const catalog = document.querySelector('#catalog');

function Product(name, price, pics) {
  this.name = name;
  this.price = price;
  this.pics = pics;
}

const products = [
  new Product("Товар1", 100, ["pic1", "pic2"]),
  new Product("Товар2", 150),
  new Product("Товар3", 152)
];

const basket = {
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

function printCatalog(products) {
  let catalogContainer = document.querySelector('#catalog');
  catalogContainer.textContent = '';
  let catalog = document.createElement('div');
  let h = document.createElement('h1');
  catalog.appendChild(h);
  h.textContent = 'Каталог:';
  products.forEach((product, index) => {
    console.log(index)
    let element = document.createElement('div');
    let name = document.createElement('h3');
    let price = document.createElement('p');
    let buyButton = document.createElement('button');
    name.textContent = product.name;
    price.textContent = product.price;
    buyButton.textContent = "Купить";
    buyButton.id = "buy";
    buyButton.setAttribute('data-id' , index); 
    element.appendChild(name);
    element.appendChild(price);
    if (product.pics != null && product.pics.length > 0) {
      let picsContainer = document.createElement('div');
      product.pics.forEach((pic, index) => {
        let picture = document.createElement('p');
        picture.textContent = pic;
        picture.id = "preview";
        picture.setAttribute('data-toggle' , index); 
        picsContainer.appendChild(picture);
      })
      element.appendChild(picsContainer);
    }
    element.appendChild(buyButton);
    catalog.appendChild(element);
  })
  catalogContainer.appendChild(catalog);
}

function printBasket(basket) {
  let basketContainer = document.querySelector('#cart');
  basketContainer.textContent = '';
  let p = document.createElement('p')
  if (basket.length() == 0) {
      p.textContent = 'Корзина пуста';
  } else {
      p.textContent = 'В корзине ' + basket.length()  + ' товаров на сумму ' + basket.countBasketPrice() + ' рублей';
  }
  basketContainer.appendChild(p);
}

printCatalog(products);
printBasket(basket); 

catalog.addEventListener('click', function(evt) {
  if(evt.target.id == 'buy') {
    basket.addProduct(products[evt.target.getAttribute('data-id')]);      
    printBasket(basket);
  }
})
