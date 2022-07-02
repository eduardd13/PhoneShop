class Product {
    constructor(name, image, releaseYear, dataWhenAdded, price,) {
        this.name = name;
        this.image = image;
        this.releaseYear = releaseYear,
        this.dataWhenAdded = dataWhenAdded;
        this.price = price;
    }
    renderProduct() {
        const productList = document.querySelector('#product-list');
        productList.innerHTML += `
            <li class="product">
                <p>Nume: ${this.name}</p>
                <p>Imagine: ${this.image}</p>
                <p>Anul aparitiei: ${this.releaseYear}</p>
                <p>Data adaugarii: ${this.dataWhenAdded}</p>
                <p>Pret: ${this.price}</p>
            </li>
        `;
    }
}