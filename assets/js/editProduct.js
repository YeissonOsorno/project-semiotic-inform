$(document).ready(function() {
    getProducts();
});

function getProducts() {
    let producs = localStorage.getItem('products');
    if (producs == null) {
        return [];
    }

    let selected = document.getElementById('selectOptions');

    for (let item of JSON.parse(producs)) {
        let optionValue = document.createElement('option')
        optionValue.innerHTML = `<option value="${item.name}">${item.name}</option>`;
        selected.append(optionValue)
    }

}