function validar(){
    var fecha,correo,clave,genero,telefono, expresion;
    // array con datos de usuario.
    //log hacer bucle hasta que encuentre el usuario.
    email = document.getElementById("email").value;
    fecha = document.getElementById("fecha").value;
    password = document.getElementById("password").value;
    genero = document.getElementById("genero").value;
    telefono = document.getElementById("telefono").value;
    expresion= /\w+@\w+\.+[a-z]/;
    
    if(email ==="" || password ==="" || fecha ==="" || genero ==="" || telefono ===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if( telefono.length!=10 || isNaN(telefono){
        alert("Introduzca correctamente el telefono");
        return false;
    }
    else if( expresion.text(expresion)){
      alert("El correo no es valido");
      return false;
    }
        alert("Introduzca correctamente el telefono");
        return false;
    }
}