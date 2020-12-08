var users = [];

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
        } else {
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Usuario creado correctamente")
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