var suggestions = []

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