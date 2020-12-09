$(document).ready(function() {
    getProducts();
});

var products = []
let newProduct = {}
let selected = document.getElementById('selectOptions');
let name = document.getElementById('inputproductname');

selected.addEventListener('change',
    function() {
        var selectedOption = this.options[selected.selectedIndex];
        getEditProduct(selectedOption.text);
    });

function getProducts() {
    let producs = localStorage.getItem('products');
    if (producs == null) {
        return [];
    }
    for (let item of JSON.parse(producs)) {
        let optionValue = document.createElement('option')
        optionValue.innerHTML = `<option value="${item.name}">${item.name}</option>`;
        selected.append(optionValue)
    }
}

function getEditProduct(value) {
    let producs = localStorage.getItem('products');
    if (producs == null) {
        return;
    }
    for (let item of JSON.parse(producs)) {
        if (item.name == value) {
            name.value = item.name;
            newProduct.name = name.value;
        }
    }
}


function deleteProduct() {

    let producs = localStorage.getItem('products');
    if (producs == null || producs.length < 1) {
        return;
    } else {
        products = JSON.parse(producs);
        var index;
        for (let i = 0; i < products.length; i++) {
            if (products[i].name === newProduct.name) {
                index = i;
            }
        }

        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        getProducts();
        alert("Producto eliminado correctamente")
        window.location.href = window.location.href;
    }


}