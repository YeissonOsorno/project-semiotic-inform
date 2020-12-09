$(document).ready(function() {
    getProducts();
});

var products = []
let newProduct = {}
let selected = document.getElementById('selectOptions');
let name = document.getElementById('inputproductname');
let unity = document.getElementById('inputproductunity');
let quantity = document.getElementById('inputproductquantity');

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
        return [];
    }
    for (let item of JSON.parse(producs)) {
        if (item.name == value) {
            name.value = item.name;
            unity.value = item.unity;
            quantity.value = item.quantity;
            newProduct.name = name.value;
            newProduct.unity = unity.value;
            newProduct.quantity = quantity.value;
        }
    }
}


function editProduct() {
    let producs = localStorage.getItem('products');
    if (producs == null) {
        return;
    }
    products = JSON.parse(producs);
    var index;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === newProduct.name) {
            index = i;
        }
    }

    products.splice(index, 1);

    let currentProduct = {}
    currentProduct.name = name.value;
    currentProduct.quantity = quantity.value;
    currentProduct.unity = unity.value;

    products.push(currentProduct);
    localStorage.setItem("products", JSON.stringify(products));
    getProducts();
    alert("Producto Editado correctamente")
    window.location.href = window.location.href;

}