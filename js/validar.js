// function validar(){
//     var nombre
//     nombre = document.getElementById("nombre").value;

//     if (nombre === ""){
//         alert("Todos los campos son obligatorios");
//         return false;
//     }
//     else if (nombre.length>30){
//         alert("El nombre es muy largo");
//         return false;
//     }

//     alert(saludo);
// }


function validar() {
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var usuario = document.getElementById('usuario').value;
    var pass = document.getElementById('pass').value;
    var phone = document.getElementById('telefono').value;
    // var btn = document.getElementById('btn');

    // document.addEventListener('DOMContentLoaded', () => {
    //     btn.disabled = true;
    // });

    if(nombre ==='' || apellidos ==='' || correo ==='' || usuario ==='' || pass ==='' || phone ==='') {
        alert('Todos los campos deben ser completados');
        return false;
    } else {
        alert(`Hola ${nombre} ${apellidos} tu datos de registro son: 
        Usuario: ${usuario} 
        Contraseña: ${pass}`);
        return true;
    }
    
    // datatype()
    // function datatype() {
    //     let nombre
    //     if(nombre.typeof === Text) {
    //         console.log(nombre)
    //     }
    // }

    console.log('enviando');
    return false;
}

function caracteres() {
    var campoNombre = document.getElementById('nombre').value;
    var campoApellidos = document.getElementById('apellidos').value;
    var campoCorreo = document.getElementById('correo').value;
    var campoUsuario = document.getElementById('usuario').value;
    var campoPass = document.getElementById('pass').value;
    var campoPhone = document.getElementById('telefono').value;

    if(campoNombre.length > 30) {
        alert('El nombre no puede superar los 30 caracteres');
    }
    if(campoApellidos.length > 80) {
        alert('Los apellidos no pueden superar los 80 caracteres');
    }
    if(campoCorreo.length > 100) {
        alert('Excede el límite');
    }
    if(campoUsuario.length > 20) {
        alert('Excede el límite');
    }
    if(campoPass.length > 10) {
        alert('Excede el límite');
    }
    if(campoPhone.length > 15) {
        alert('Excede el límite');
    }
    // else if (!(typeof campoNombre ==='text')) {
    //     alert('malo');
    // }
    
    else if (isNaN(campoPhone)) {
        alert('Ingresa un número valido');
    }
}


