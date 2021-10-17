/* Registro de usuario*/
window.addEventListener('load', function() {

let formulario = this.document.querySelector('.productEdition');

    formulario.addEventListener('submit', function(e){

        let errores = [];

        let campoNombre = document.querySelector('input.name');
        let campoApellido = document.querySelector('input.lastName');
        
        if (campoNombre.value == '' && campoApellido.value == ''){
            errores.push("Los campos de nombre y apellido son obligatorios");
        } else if (campoNombre.value.length < 2 && campoApellido.value.length < 2 ) {
            errores.push("Los campos de nombre y apellido deben tener al menos dos caracteres"); 
        }

        let campoEmail = document.querySelector('input.email');
        if (campoEmail.value == ''){
            errores.push("El campo email es obligatorio");
        } // else if ( campoEmail. ){
        //     errores.push("El campo email debe ser válido");
        // }

        let campoContraseña = document.querySelector('input.password');
        if (campoContraseña.value == ''){
            errores.push("El campo contraseña es obligatorio");
        } else if ( campoContraseña.length < 8 ){
            errores.push("El campo contraseña debe tener al menos ocho caracteres");
        }

        // let campoImagen = document.querySelector('input.image');
        // if (campoImagen. != ''){
        //     addEventListener.length
        //     errores.push("El campo imagen sólo acepta formatos jpg, jpeg, png o gif");
        // }

        if(errores.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector("'div.errores ul");
            for (let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }


    });




});