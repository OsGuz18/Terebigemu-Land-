//Declaración de constantes a utilizar 
const express = require("express"); //Requerimos la paquetería de express (Previamente instalada)
const router = express.Router(); //Declaramos la constante router con la propiedad de express
const multer = require('multer'); //Requerimos la paquetería de "Multer" para subir imagenes al sevirodr (Previamente instalado)
const path = require("path") //Requerimos la paquetería "path" contenida en node
const userController = require("../controllers/userController") //Requerimos el controlador para usuarios
const { body }=require("express-validator")

//Configuración para subir archivos al servidor mediante Multer
let storage = multer.diskStorage({    
    destination: (req, file, cb)=>{
        cb (null, path.join(__dirname,'../../public/images/users'));
    },
    filename: function (req, file, cb) {
        cb(null, "user" + '-' + Date.now() + path.extname(file.originalname))
      }
})
const upload = multer({ storage: storage })

const validaciones=[
    body("name")
        .isAlpha('es-ES',{ignore:" "}).withMessage("El nombre no puede contener números").bail()
        .isLength({min:5}).withMessage("El nombre debe contener 5 o más caracteres"),
    
    body("lastName")
        .isAlpha('es-ES',{ignore:" "}).withMessage("El apellido no puede contener números").bail()
        .isLength({min:2}).withMessage("El apellido debe 2 o más caracteres"),
    
    body("age")
        .isNumeric().withMessage("La edad debe ser un numero")
        .custom((value,{req})=>{
            if(value > 99 || value <18){
                throw new Error("La edad debe ser un número válido");
            }
            return true
        }),

    body("email").isEmail().withMessage("El email no es válido"),

    body("image").custom((value,{req})=>{
        let file = req.file;
        //let acceptedExtensions=[".jpg",".png"];
        
        if(!file){
            throw new Error("Tienes que subir una imagen");
        }/*else{
            let fileExtension=path.extname(file.originalname)
            if (acceptedExtensions.includes(fileExtension)){
                throw new Error("Formato de imagen no válido");
            }
        }*/
        return true
    })
]; 

router.get("/register",userController.register)
router.post("/register",upload.single("avatar"),validaciones,userController.storage)

/*router.get("/login",userController.login)
router.post("/login",userController.validation)*/





module.exports=router;