let products = []

function validar() {
    let name = document.getElementById('inputproductname');
    let unity = document.getElementById('inputproductunity');
    let quantity = document.getElementById('inputproductquantity');
    let regexOnlyNumbers = "/^[-]?[0-9]+[\.]?[0-9]+$/"
    if (name.value == "") return alert('El campo nombre no puede ir vacio');
    if (unity.value == "") return alert('El campo unidad no puede ir vacio');
    if (quantity.value == "") return alert('El campo cantidad no puede ir vacio');
    if (isNaN(Number(quantity.value))) return alert('Solo se permite numeros en el campo cantidad')

    add()
}

function add() {
    let product = {}
    product.id = Math.floor(Math.random() * 101);
    console.log(product.id);
    product.name = document.getElementById('inputproductname').value;
    product.unity = document.getElementById('inputproductunity').value;
    product.quantity = document.getElementById('inputproductquantity').value;


    let producs = localStorage.getItem('products')
    if (producs == null) {
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        alert("Producto agregado correctamente")
    } else {
        products = JSON.parse(producs);
        products.push(product);

        localStorage.setItem("products", JSON.stringify(products));
        alert("Producto agregado correctamente")
    }
    set();

}

function set() {
    document.getElementById('inputproductname').value = "";
    document.getElementById('inputproductunity').value = "";
    document.getElementById('inputproductquantity').value = "";
}