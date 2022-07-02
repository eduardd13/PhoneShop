root.innerHTML += `
    <form id="add-product">
        <label for="name">Nume:</label>
        <input type="text" name="name" id="name"/>
        <label for="releaseYear">Anul aparitiei:</label>
        <input type="text" name="releaseYear" id="releaseYear"/>
        <label for="image">Imagine:</label>
        <input type="text" name="image" id="image"/>
        <label for="price">Pret:</label>
        <input type="number" name="price" id="price"/>
        <input type="submit"/>
    </form>
`

function addFormFunctionality() {
    const form = document.querySelector('#add-product');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const currentTime = new Date();
        const phoneName = event.target.name.value;
        const phoneImage = event.target.image.value;
        const phoneReleaseYear = event.target.releaseYear.value;
        const phonePrice = event.target.price.value;
        const phoneDataWhenAdded = currentTime.toUTCString();
        const newPhone = {
            name: phoneName,
            image: phoneImage,
            releaseYear: phoneReleaseYear,
            price: phonePrice,
            dataWhenAdded: phoneDataWhenAdded
        };

        const localStorageProducts = getProducts();
        localStorageProducts.push(newPhone);
        setProducts(localStorageProducts);

        renderProductList(localStorageProducts);
    })
}

window.addEventListener('load', addFormFunctionality);