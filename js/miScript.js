let edit=null;
document.getElementById('btnGuardar').addEventListener('click', registrar);
function registrar(){

const nombre=document.getElementById('nombre').value;
const correo=document.getElementById('correo').value;
const telefono=document.getElementById('telefono').value;
const genero=document.getElementById('genero').value;


const paciente={nombre, correo, telefono, genero};
let pacientes=JSON.parse(localStorage.getItem('pacientes')) || [];
pacientes.push(paciente);

localStorage.setItem("pacientes", JSON.stringify(pacientes));
}

function mostrar(){
    const lista= document.getElementById('pacientesRegistrados');
    const pacientes=JSON.parse( localStorage.getItem('pacientes')) || [];

    let tabla;
    tabla=` <table border="1">
        <tr>    
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Género</th>
            <th></th>
            <th></th>
        </tr>`;
    pacientes.forEach((p,index)=>{
        tabla+=`<tr>
            <td>${p.nombre}</td>
            <td>${p.correo}</td>
            <td>${p.telefono}</td>
            <td>${p.genero}</td>
            <td><input id="btnSeleccionar" type="button" value="Seleccionar" onclick="edicion(${index})"></td>
            <td><input id="btnEliminar" type="button" value="Eliminar" onclick="borrar(${index})"></td>
        </tr>`;
    });
    tabla+=`</table>`;
    lista.innerHTML=tabla;
}

function edicion(index){
    
    const pacientes=JSON.parse(localStorage.getItem('pacientes')) || [];
    const paciente=pacientes[index]; 

    document.getElementById('nombre').value=paciente.nombre;
    document.getElementById('correo').value=paciente.correo;
    document.getElementById('telefono').value=paciente.telefono;
    document.getElementById('genero').value=paciente.genero;

    document.getElementById('btnGuardar').style.display="none";
    edit=index;
}

document.getElementById('btnActualizar').addEventListener('click', ()=>{
    
    const nombre=document.getElementById('nombre').value;
    const correo=document.getElementById('correo').value;
    const telefono=document.getElementById('telefono').value;
    const genero=document.getElementById('genero').value;

    if(edit===null){
        alert("No hay usuario seleccionado");
        return;
    }
    
    let pacientes=JSON.parse(localStorage.getItem('pacientes')) || [];
    pacientes[edit]={nombre, correo, telefono, genero};
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
    edit=null;     
});

function borrar(index){
    let pacientes=JSON.parse(localStorage.getItem('pacientes')) || [];
    pacientes.splice(index, 1);
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
    mostrar();
}

document.getElementById("btnEnviar").addEventListener("click", function(event){
    event.preventDefault(); // evita que el formulario recargue la página
    window.location.href = "Premio.html"; // redirige
});

document.addEventListener("DOMContentLoaded", mostrar);