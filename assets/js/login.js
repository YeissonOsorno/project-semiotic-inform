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