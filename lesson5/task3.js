function Product(name, price) {
  this.name = name;
  this.price = price;
}

const products = [
  new Product("Товар1", 100),
  new Product("Товар2", 150),
  new Product("Товар3", 152)
];

function printCatalog(products) {
  let catalogContainer = document.querySelector('#catalog');
  catalogContainer.textContent = '';
  let catalog = document.createElement('div');
  let h = document.createElement('h1');
  catalog.appendChild(h);
  h.textContent = 'Каталог:';
  products.forEach((product) => {
    let element = document.createElement('div');
    let name = document.createElement('h3');
    let price = document.createElement('p');
    name.textContent = product.name;
    price.textContent = product.price;
    element.appendChild(name);
    element.appendChild(price);
    catalog.appendChild(element);
  })
  catalogContainer.appendChild(catalog);
}

printCatalog(products);

