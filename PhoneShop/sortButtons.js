root.innerHTML += `
    <div>
        <button id="sort-by-price">Sorteaza dupa pret</button>
        <button id="sort-by-releaseYear">Sorteaza dupa anul aparitiei</button>
        <button id="sort-by-dataWhenAdded">Sorteaza dupa data adaugarii</button>
        <button id="sort-by-priceAbove4200">Sortare pret >4200</button>
    </div>
`;

function sortPhones(sortType) {
    const localStorageProducts = getProducts();
    let sortedArray = [];
    switch(sortType) {
        case "SORT_BY_PRICE":
            sortedArray = localStorageProducts.sort((elem1, elem2) => {
                if (elem1.price < elem2.price) {
                    return -1;
                } else if (elem1.price > elem2.price) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;
        case "SORT_BY_RELEASEYEAR":
            sortedArray = localStorageProducts.sort((elem1, elem2) => {
                return (elem1.releaseYear < elem2.releaseYear) ? -1 : (elem1.releaseYear > elem2.releaseYear) ? 1 : 0;
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;
        case "SORT_BY_DATAWHENADDED":
            sortedArray = localStorageProducts.sort((elem1, elem2) => {
                var data1 = new Date(elem1.dataWhenAdded);
                var data2 = new Date(elem2.dataWhenAdded);
                return (data1 < data2) ? -1 : (data1 > data2) ? 1 : 0;
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;
        case "SORT_BY_PRICEABOVE4200":
            sortedArray = localStorageProducts.filter((elem) => {
                return elem.price > 4200;
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;
    }
}

function addSortingFunctionality() {
    const sortByPrice = document.querySelector('#sort-by-price');
    sortByPrice.addEventListener('click', function() {
        sortPhones('SORT_BY_PRICE');
    });

    const sortByReleaseYear = document.querySelector('#sort-by-releaseYear');
    sortByReleaseYear.addEventListener('click', function() {
        sortPhones('SORT_BY_RELEASEYEAR');
    });

    const sortByDataAdaugarii = document.querySelector('#sort-by-dataWhenAdded');
    sortByDataAdaugarii.addEventListener('click', function() {
        sortPhones('SORT_BY_DATAWHENADDED');
    });

    const sortByPriceAbove4200 = document.querySelector('#sort-by-priceAbove4200');
    sortByPriceAbove4200.addEventListener('click', function() {
        sortPhones('SORT_BY_PRICEABOVE4200');
    });
}

window.addEventListener('load', addSortingFunctionality);