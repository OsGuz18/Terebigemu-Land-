/* Validación del Registro de usuario*/
window.addEventListener("load", function() {

let formRegist = document.querySelector("form.userRegistration");

    formRegist.addEventListener('submit', function(e){
        
        let errores = [];

        let campoNombre = document.querySelector('input.name');
        if (campoNombre.value == ""){
            errores.push("El campo de nombre es obligatorio");
        } else if (campoNombre.value.length < 2){
            errores.push("El campo de nombre debe tener al menos dos caracteres");
        }
        
        let campoApellido = document.querySelector('input.lastName');
        if (campoApellido.value == ""){
            errores.push("El campo de apellido es obligatorio");
        } else if (campoApellido.value.length < 2 ) {
            errores.push("El campo de apellido debe tener al menos dos caracteres"); 
        } 

        let campoEmail = document.querySelector('input.email');
        let emailVal = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (campoEmail.value == ''){
            errores.push("El campo email es obligatorio");
        } else if(!emailVal.test(campoEmail.value)){
             errores.push("email no válido")
        }
                  
        let campoContraseña = document.querySelector('input.password');
        let expReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        if (campoContraseña.value == ''){
            errores.push("El campo contraseña es obligatorio");
        } else if ( campoContraseña.value.length < 8 ){
            errores.push("El campo contraseña debe tener al menos ocho caracteres");
        } else if(!expReg.test(campoContraseña.value)){
            errores.push("La contraseña debe tener al menos una letra mayúscula, al menos una minúscula, un número y un caracter especial");
         }

        let campoImagen = document.querySelector('input.formImage');
        let extValidas = /(.jpg|.jpeg|.png|.gif)$/i;
        if (!extValidas.exec(campoImagen.value)){
            errores.push("El campo imagen sólo acepta formatos jpg, jpeg, png o gif");
        }

        
        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector('div.errores ul');
            ulErrores.innerHTML = '';

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += `<li >  ${errores[i]} </li>`;
            };
        } else if (errores.length == 0 && confirm("¿Confirmas que quieres enviar este formulario?")){
            alert('La validación fue exitosa')
            form.submit();
        }
        
    });
});

// Validación para el login de usuarios //

window.addEventListener("load", function() {

    let formLogin = document.querySelector("form.userLogin");
    
        formLogin.addEventListener('submit', function(e){
            
            let errores = [];
       
            let campoEmail = document.querySelector('input.email');
            let emailVal = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (campoEmailLogin.value == ''){
            errores.push("El email es obligatorio");
            } else if(!emailVal.test(campoEmail.value)){
             errores.push("email no válido")
            } 

                      
            let campoContraseña = document.querySelector('input.password');
            if (campoContraseña.value == ''){
                errores.push("El campo contraseña es obligatorio");
            }
    
            if (errores.length > 0) {
                e.preventDefault();
    
                let ulErrores = document.querySelector('div.errores ul');
                ulErrores.innerHTML = '';
    
                for (let i = 0; i < errores.length; i++) {
                    ulErrores.innerHTML += "<li>" +  errores[i] + "</li>";
                };
            } else if (errores.length == 0 && confirm("¿Confirmas que quieres enviar este formulario?")){
                alert('La validación fue exitosa')
                form.submit();
            }
            
        });
    });

    //Validación de la creación de productos//

    window.addEventListener("load", function() {

        let formCreateProduct = document.querySelector("form.productCreation");
        
        formCreateProduct.addEventListener('submit', function(e){
                
                let errores = [];
        
                let campoNombre = document.querySelector('input.name');
                if (campoNombre.value == ""){
                    errores.push("El campo de nombre es obligatorio");
                } else if (campoNombre.value.length < 5){
                     errores.push("El campo de nombre debe tener al menos cinco caracteres");
                }
                
                let campoDescripcion = document.querySelector('input.description');
                if (campoDescripcion.value.length < 20 ) {
                    errores.push("La descripción debe tener al menos veinte caracteres"); 
                }
                
                let campoImagen = document.querySelector('input.formImage');
                let extValidas = /(.jpg|.jpeg|.png|.gif)$/i;
                if (!extValidas.exec(campoImagen.value)){
                    errores.push("El campo imagen sólo acepta formatos jpg, jpeg, png o gif");
                }
        
                if (errores.length > 0) {
                    e.preventDefault();
        
                    let ulErrores = document.querySelector('div.errores ul');
                    ulErrores.innerHTML = '';
        
                    for (let i = 0; i < errores.length; i++) {
                        ulErrores.innerHTML += `<li >  ${errores[i]} </li>`;
                    };
                } else if (errores.length == 0 && confirm("¿Confirmas que quieres enviar este formulario?")){
                    alert('La validación fue exitosa')
                    form.submit();
                }
            });
        });

        
     //Validación de la edición de productos//

    window.addEventListener("load", function() {

        let formEditProduct = document.querySelector("form.productEdition");
        
        formEditProduct.addEventListener('submit', function(e){
                
                let errores = [];
        
                let campoNombre = document.querySelector('input.name');
                if (campoNombre.value == ""){
                    errores.push("El campo de nombre es obligatorio");
                } else if (campoNombre.value.length < 5){
                     errores.push("El campo de nombre debe tener al menos cinco caracteres");
                }
                
                let campoDescripcion = document.querySelector('input.description');
                if (campoDescripcion.value.length < 20 ) {
                    errores.push("La descripción debe tener al menos veinte caracteres"); 
                }
                
                let campoImagen = document.querySelector('input.formImage');
                let extValidas = /(.jpg|.jpeg|.png|.gif)$/i;
                if (!extValidas.exec(campoImagen.value)){
                    errores.push("El campo imagen sólo acepta formatos jpg, jpeg, png o gif");
                }
        
                if (errores.length > 0) {
                    e.preventDefault();
        
                    let ulErrores = document.querySelector('div.errores ul');
                    ulErrores.innerHTML = '';
        
                    for (let i = 0; i < errores.length; i++) {
                        ulErrores.innerHTML += `<li >  ${errores[i]} </li>`;
                    };
                } else if (errores.length == 0 && confirm("¿Confirmas que quieres enviar este formulario?")){
                    alert('La validación fue exitosa')
                    form.submit();
                }
            });
        });