var suggestions = []

function validar() {
    let email = document.querySelector("#inputEmail");
    let body = document.querySelector("#textAreaMessage");
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email.value == "") return alert('El campo email no puede ir vacio');
    if (!emailRegex.test(email.value)) return alert('Ingresa un email valido');
    if (body.value == "") return alert('El campo mensaje no puede ir vacio');
    if (body.value.length < 4) return alert('El mensaje es demasiado corto almenos 4 caracteres')
    save()
}

function save() {
    var suggestion = {};
    suggestion.email = document.querySelector("#inputEmail").value;
    suggestion.body = document.querySelector("#textAreaMessage").value;
    suggestions.push(suggestion)
    let result = ifEmpty();
    if (result.Error) {
        localStorage.setItem("suggestions", JSON.stringify(suggestions));
        alert("Sugerencia enviada correctamente")
        setTimeout(function() {
            window.location.href = window.location.href
        }, 500)
    } else {
        suggestions = result;
        suggestions.push(suggestion)
        localStorage.setItem("suggestions", JSON.stringify(suggestions));
        alert("Sugerencia enviada correctamente")
        setTimeout(function() {
            window.location.href = window.location.href
        }, 500)
    }
}

function ifEmpty() {
    let response = {};
    let suggestion = localStorage.getItem('suggestions')
    if (suggestion == null) {
        response.Error = "no hay sugerencias";
        return response;
    }

    return response.OK = JSON.parse(suggestion);
}