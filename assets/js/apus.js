


$(document).ready(function() {
var datos = JSON.parse(localStorage.getItem("products"));

for(var o in datos){
console.log(datos);
document.querySelector("#items").innerHTML += `<li> <a onclick='listModal${o}()' id='item${o}'>${datos[o].name}</a> </li>`;
}

});

var datosModal = JSON.parse(localStorage.getItem("products"));




function listModal0(){
document.querySelector("#containerModal").innerHTML = `

<div class="modal fade" id="mostrarmodal" tabindex="-1″ role="dialog" aria-labelledby="basicModal" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header" style="text-align: center;justify-content: center;">
<div style="display="display:block"">
<h5>Codigo= ${datosModal[0].id}</h5>
<h4>Nombre= ${datosModal[0].name}</h4>
</div>
</div>
<div class="modal-body">
<div style="display:flex">
<h4>Unidad= ${datosModal[0].unity}</h4>
<h4 style="margin-left:100px">Cantidad= ${datosModal[0].quantity}</h4>
</div>
</div>
<div class="modal-footer">
<a href="#" data-dismiss="modal" class="btn btn-danger">Cerrar</a>
</div>
</div>
</div>
</div>

    `;

$("#mostrarmodal").modal("show");
}


function listModal1(){
document.querySelector("#containerModal").innerHTML = `

<div class="modal fade" id="mostrarmodal" tabindex="-1″ role="dialog" aria-labelledby="basicModal" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header" style="text-align: center;justify-content: center;">
<div style="display="display:block"">
<h5>Codigo= ${datosModal[1].id}</h5>
<h4>Nombre= ${datosModal[1].name}</h4>
</div>
</div>
<div class="modal-body">
<div style="display:flex">
<h4>Unidad= ${datosModal[1].unity}</h4>
<h4 style="margin-left:100px">Cantidad= ${datosModal[1].quantity}</h4>
</div>
</div>
<div class="modal-footer">
<a href="#" data-dismiss="modal" class="btn btn-danger">Cerrar</a>
</div>
</div>
</div>
</div>

    `;

$("#mostrarmodal").modal("show");
}

function listModal2(){
document.querySelector("#containerModal").innerHTML = `

<div class="modal fade" id="mostrarmodal" tabindex="-1″ role="dialog" aria-labelledby="basicModal" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header" style="text-align: center;justify-content: center;">
<div style="display="display:block"">
<h5>Codigo= ${datosModal[2].id}</h5>
<h4>Nombre= ${datosModal[2].name}</h4>
</div>
</div>
<div class="modal-body">
<div style="display:flex">
<h4>Unidad= ${datosModal[2].unity}</h4>
<h4 style="margin-left:100px">Cantidad= ${datosModal[2].quantity}</h4>
</div>
</div>
<div class="modal-footer">
<a href="#" data-dismiss="modal" class="btn btn-danger">Cerrar</a>
</div>
</div>
</div>
</div>

    `;


$("#mostrarmodal").modal("show");

}

function btnSearch(){
var search = document.querySelector("#searchbox").value;
var datos = JSON.parse(localStorage.getItem("products"));
for(var y in datos){
    if(datos[y].name.search(search)>-1){
    console.log(datos[y]);
    document.querySelector("#items").innerHTML = `<li> <a onclick='listModal${y}()' id='item${y}'>${datos[y].name}</a> </li>`;
}
}
}