//Declaración de las constantes a usar
const path = require("path") //Requerimos la paquetería de "path" incluida en node

//Configuración de los métodos del controlador 
let controlador={
    index:(req,res)=>{
        res.render("index")
    },

    /* login:(req,res)=>{
        res.render("Users/login")
    },

    register:(req,res)=>{
        res.render("Users/register")
    }, */

    shoppingCar:(req,res)=>{
        res.render("Products/shopping-car")
    },
}

module.exports=controlador; // Exportación del controlador 