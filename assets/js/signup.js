var users = [];

function validar() {
    let name = document.querySelector("#inputName");
    let email = document.querySelector("#inputEmail");
    let pass = document.querySelector("#inputPassword");

    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (name.value == "") return alert('El campo nombre no puede ir vacio');
    if (name.value.length < 3) return alert('El nombre debe de tener almenos 3 caracteres')
    if (email.value == "") return alert('El campo email no puede ir vacio');
    if (!emailRegex.test(email.value)) return alert('Ingresa un email valido');
    if (pass.value == "") return alert('La contraseña no puede ir vacia')
    if (pass.value.length < 6) return alert('La contraseña es demasiado corta')

    signup()
}

function signup() {
    var user = {};
    user.name = document.querySelector("#inputName").value;
    user.email = document.querySelector("#inputEmail").value;
    user.pass = document.querySelector("#inputPassword").value;
    let result = ifExist(user);
    if (result.Error) {
        alert(result['Error'])
    } else if (result.Error == "No hay usuarios") {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        let userDB = ifEmpty();
        if (Array.isArray(userDB)) {
            console.log('is array')
            users = userDB;
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Usuario creado correctamente")
            setTimeout(function() {
                window.location.href = window.location.href.replace('signup.html', 'login.html')
            }, 500)
        } else {
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Usuario creado correctamente")
            setTimeout(function() {
                window.location.href = window.location.href.replace('signup.html', 'login.html')
            }, 500)
        }
    }
}

function ifEmpty() {
    let response = {};
    let users = localStorage.getItem('users')
    if (users == null) {
        response.Error = "No hay usuarios";
        return response;
    }

    return response.OK = JSON.parse(users);
}

function ifExist(user) {
    let response = {};
    let usersArr = ifEmpty();
    if (Array.isArray(usersArr)) {
        for (var item of usersArr) {
            if (item.email == user.email) {
                response.Error = "Email ya existe intenta con otro";
                document.querySelector("#inputEmail").value = "";
                return response;
            } else {
                return "ok";
            }
        }
    }
    if (usersArr.Error) {
        return "";
    }
}