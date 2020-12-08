var datos = ["item1","item2","item 3"];
var datosModal = [
    {id:1,nombre:"cemento",unidad:"m2",cantidad:"25"},
    {id:1,nombre:"cemento2",unidad:"m3",cantidad:"35"},
    {id:1,nombre:"cemento3",unidad:"m4",cantidad:"45"}
]
for(var x in datos){
    document.querySelector("#items").innerHTML += `<li> <a onclick='listModal()' id='item${x}'>${datos[x]}</a> </li>`;
    document.querySelector("#mostrarmodal").innerHTML = `
    
    <div class="modal fade" id="mostrarmodal" tabindex="-1″ role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
    <h3>${datosModal[x].nombre}</h3>
    </div>
    <div class="modal-body">
    <h4>${datosModal[x].unidad}</h4>
    Mas texto en la ventana.
    </div>
    <div class="modal-footer">
    <a href="#" data-dismiss="modal" class="btn btn-danger">Cerrar</a>
    </div>
    </div>
    </div>
    </div>
    
     `;
}





function listModal(){
    $("#mostrarmodal").modal("show");
}
