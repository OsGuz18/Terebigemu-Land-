//Declaración de constantes a utilizar
const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")


//Página principal de la aplicación
router.get("/",mainController.index)
//router.get("/login",mainController.login)
//router.get("/register",mainController.register)
router.get("/shopping-car",authMiddleware, mainController.shoppingCar)

module.exports=router; //Exportación de la constante router