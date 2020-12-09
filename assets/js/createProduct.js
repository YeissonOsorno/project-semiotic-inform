let products = []

function add() {
    let product = {}
    product.id = Math.floor(Math.random() * 101);
    console.log( product.id);
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