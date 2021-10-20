//Declaración de constantes a utilizar 
const express = require("express"); //Requerimos la paquetería de express (Previamente instalada)
const router = express.Router(); //Declaramos la constante router con la propiedad de express
const multer = require('multer'); //Requerimos la paquetería de "Multer" para subir imagenes al sevirodr (Previamente instalado)
const path = require("path") //Requerimos la paquetería "path" contenida en node
const userController = require("../controllers/userController") //Requerimos el controlador para usuarios
const { body }=require("express-validator")
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")




    

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
        .isLength({min:2}).withMessage("El nombre debe contener 2 o más caracteres"),
    
    body("lastName")
        .isAlpha('es-ES',{ignore:" "}).withMessage("El apellido no puede contener números").bail()
        .isLength({min:2}).withMessage("El apellido debe 2 o más caracteres"),
    
    body("age")
        .isNumeric().withMessage("La edad debe ser un numero")
        .custom((value,{req})=>{
            if(value > 99 || value < 18){
                throw new Error("La edad debe ser un número válido");
            }
            return true
        }),

    body("phone")
    .isNumeric().withMessage("La edad debe ser un numero"),

    body("email").isEmail().withMessage("El email no es válido"),

    body("password")
    .isLength({min:8}).withMessage("La contraseña debe contener 8 o mas caracteres")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage("La contraseña debe contener almenos una mayúscula, una minúscula, un numero y un caracter especial"),
    
    body("image").custom((value,{req})=>{
        let file = req.file;
        let acceptedExtensions=[".jpg",".png",".jpeg",".gif"];
        
        if(!file){
            throw new Error("Tienes que subir una imagen");
        }else{
            let fileExtension=path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error("Formato de imagen no válido");
            }
        }
        return true
    })
]; 

const validacionesLogin =[
    body("email").isEmail().withMessage("El email no es válido"),        
]



router.get("/register",guestMiddleware, userController.register)
router.post("/register",upload.single("avatar"),validaciones,userController.storage)

router.get ("/userEdit/:id",authMiddleware,userController.edit)
router.put ("/userEdit/:id",authMiddleware,userController.edit1)

router.get("/login", guestMiddleware,userController.login)
router.post("/login",validacionesLogin,userController.loginProcces)



router.get ("/profile",authMiddleware, userController.profile)
router.get("/logout",userController.logout)

router.delete('/delete/:id', userController.destroy); 


module.exports=router;