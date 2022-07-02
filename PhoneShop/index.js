const root = document.querySelector('#root');
const products = [
    {
        name: 'Iphone XS',
        image: 'image',
        releaseYear: '2018',
        dataWhenAdded: 'Wed, 23 Jun 2021 15:55:45 GMT',
        price: 4500
    },
    {
        name: 'Huawei P30',
        image: 'image',
        releaseYear: '2017',
        dataWhenAdded: 'Wed, 25 Jun 2021 15:55:45 GMT',
        price: 4000
    },
    {
        name: 'Samsung S10',
        image: 'image',
        releaseYear: '2016',
        dataWhenAdded: 'Wed, 22 Jun 2021 15:55:45 GMT',
        price: 4250
    }
];

function getProducts() {
    const localStorageProducts = localStorage.getItem("products");
    console.log(localStorageProducts);
    const parsedProducts = JSON.parse(localStorageProducts);
    return parsedProducts;
}

function setProducts(products) {
    const stringifiedProducts = JSON.stringify(products);
    localStorage.setItem("products", stringifiedProducts);
}

if (getProducts() === null){
    setProducts(products);
}

function startRendering() {
    const localStorageProducts = getProducts();
    renderProductList(localStorageProducts);
}
window.addEventListener('load', startRendering);