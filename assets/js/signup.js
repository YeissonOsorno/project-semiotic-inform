const { link } = require("fs");

function myFunction() {
var users = [];
var user = {};
user.name = document.querySelector("#inputName").value;
user.email = document.querySelector("#inputEmail").value;
user.pass = document.querySelector("#inputPassword").value;
users.push(user);


localStorage.setItem("users",JSON.stringify(users));

}

function getUsers(){
    let response = [];
    let users = localStorage.getItem('users')   
    if(users == null){
       response['Error'] = "No hay usuarios";
       return response;
    }

    return response['OK'] = JSON.parse(users);  
}

function ifExist(){
    let response = [];
    let usersArr = getUsers();
    usersArr['Error'] && errors("EL usuario no existe")
   

}

function errors(error){
    console.log(error)
}