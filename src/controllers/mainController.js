let path = require("path")

let controlador={
    index:(req,res)=>{
        res.render("index")
    },

    login:(req,res)=>{
        res.render("Users/login")
    },

    register:(req,res)=>{
        res.render("Users/register")
    },

    shoppingCar:(req,res)=>{
        res.render("Products/shopping-car")
    },

    productDetail:(req,res)=>{
        res.render("Products/productDetail")
    }
}

module.exports=controlador;