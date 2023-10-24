function validar() {
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let cp = document.getElementById("cp");
    let comentario = document.getElementById("comentario")
    let error = false;
document.getElementById("validar_usuario").innerHTML = "&nbsp;";
document.getElementById("validar_email").innerHTML = "&nbsp;";    
document.getElementById("validar_tel").innerHTML = "&nbsp;"; 
document.getElementById("validar_cp").innerHTML = "&nbsp;"; 
document.getElementById("validar_comentario").innerHTML = "&nbsp;"; 

    if (nombre.value == "") {
        document.getElementById("validar_usuario").innerHTML = "Debe completar Nombre y Apellido";
        error = true;
        nombre.focus(); 
        
    }
    if (email.value == "") {  
        document.getElementById("validar_email").innerHTML = "Debe completar el e-mail";
        error = true;
        email.focus();
        
    }
    if (telefono.value == "") {
        document.getElementById("validar_tel").innerHTML = "Debe completar su teléfono";
        error = true;
        telefono.focus(); 
        
    }

    if (cp.value == "") {
        document.getElementById("validar_cp").innerHTML = "Debe completar el CP";
        error = true;
        cp.focus(); 
        
    }

    if (comentario.value == "") {
        document.getElementById("validar_comentario").innerHTML = "Debe completar con su consulta";
        error = true;
        comentario.focus(); 
        
    }
 
    if (error == false) {   
        document.getElementById("nombre").value = ""  
        document.getElementById("validar_usuario").innerHTML = "&nbsp;";  
        document.getElementById("email").value = ""  
        document.getElementById("validar_email").innerHTML = "&nbsp;";
        document.getElementById("telefono").value = ""  
        document.getElementById("validar_tel").innerHTML = "&nbsp;";
        document.getElementById("cp").value = ""  
        document.getElementById("validar_cp").innerHTML = "&nbsp;";
        document.getElementById("comentario").value = ""  
        document.getElementById("validar_comentario").innerHTML = "&nbsp;";

        alert("Consulta Enviada")

    }

    return !error
}
