function validar() {
    let email = document.getElementById('inputEmail')
    let pass = document.getElementById('inputPassword');
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email.value == "") return alert('El campo email no puede ir vacio');
    if (!emailRegex.test(email.value)) return alert('Ingresa un email valido');
    if (pass.value == "") return alert('La contraseña no puede ir vacia')
    login()
}

function login() {
    let response = {};
    var user = {};
    user.email = document.querySelector("#inputEmail").value;
    user.pass = document.querySelector("#inputPassword").value;

    let users = localStorage.getItem('users')
    if (users == null) {
        return;
    }

    for (var item of JSON.parse(users)) {
        if (item.email == user.email && item.pass == user.pass) {
            let currentUrl = window.location.href;
            alert("Usuario Logueado correctamente")
            setTimeout(function() {
                window.location.href = currentUrl.replace('login.html', 'intro.html')
            }, 1000)
            return;
        }
    }
    alert('Usuario no existe')
}