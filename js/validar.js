function validar() {
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var usuario = document.getElementById('usuario').value;
    var pass = document.getElementById('pass').value;
    var phone = document.getElementById('telefono').value;

    if(nombre ==='' || apellidos ==='' || correo ==='' || usuario ==='' || pass ==='' || phone ==='') {
        alert('Todos los campos deben ser completados');
    } else {
        alert(`
        Bienvenido!!
        Hola ${nombre} ${apellidos} tu datos de registro son los siguientes:
        Usuario: ${usuario} 
        Contraseña: ${pass}`);
        return true;
    }

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
        alert('El correo no puede superar los 100 caracteres');
    }
    if(campoUsuario.length > 20) {
        alert('El nombre de usuario no puede exceder los 20 caracteres');
    }
    if(campoPass.length > 10) {
        alert('La constraseña solo puede contener 10 caracteres');
    }
    if(campoPhone.length > 15) {
        alert('Número invalido');
    }
    else if (isNaN(campoPhone)) {
        alert('Ingresa un número valido por favor');
    }
}

function validateEmail() {
    var validaCorreo = document.getElementById('correo').value;
    var validaEmail = /\w+@\w+\.+[a-z]/;

    if (!validaEmail.test(validaCorreo)) {
        alert('El correo ingresado es incorrecto');
    }
}
