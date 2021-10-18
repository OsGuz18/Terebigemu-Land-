//Declaración de constantes a utilizar 
const express = require("express"); //Requerimos la paquetería de express (Previamente instalada)
const router = express.Router(); //Declaramos la constante router con la propiedad de express
const multer = require('multer'); //Requerimos la paquetería de "Multer" para subir imagenes al sevirodr (Previamente instalado)
const path = require("path") //Requerimos la paquetería "path" contenida en node
const productController = require("../controllers/productController") //Requerimos el controlador para productos.
const { body }=require("express-validator");
const { exit } = require("process");

//Configuración para subir archivos al servidor mediante Multer
let storage = multer.diskStorage({    
    destination: (req, file, cb)=>{
        cb (null, path.join(__dirname,'../../public/images/products'));
    },
    filename: function (req, file, cb) {
        cb(null, "product" + '-' + Date.now() + Math.random() + path.extname(file.originalname))
      }
})
const upload = multer({ storage: storage })

const validaciones=[
    body("name")
        .isLength({min:5}).withMessage("El nombre debe contener 5 o más caracteres"),
    
    body("description")
        .isLength({min:20}).withMessage("La descripción debe contener al menos 20 caracteres"),
    
    body("images").custom((value,{req})=>{
        let file = req.files;
        let acceptedExtensions=[".jpg",".png",".jpeg",".gif"];
        let fileExtension
        fileExtension=path.extname(file[0].originalname)
        if (!acceptedExtensions.includes(fileExtension)){
            throw new Error("Formato de imagen no válido");
        }
        if(file[1]){
            fileExtension=path.extname(file[1].originalname)
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error("Formato de imagen no válido");
            }
        }
        if(file[2]){
            fileExtension=path.extname(file[2].originalname)
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error("Formato de imagen no válido");
            }
        }
        if(file[3]){
            fileExtension=path.extname(file[3].originalname)
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error("Formato de imagen no válido");
            }
        }
        if(file[4]){
            fileExtension=path.extname(file[4].originalname)
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error("Formato de imagen no válido");
            }
        }
        
        
       
        
    return true
    })
]; 

//Listado de productos
router.get("/", productController.productList);

//Detalle del producto
router.get("/productDetail/:id", productController.productDetail);

// Creación de productos
router.get("/create", productController.createProduct);
router.post("/create", upload.array('images'),validaciones,productController.store);

//Edición de productos
router.get('/editProduct/:id', productController.editProduct); 
router.put('/editProduct/:id', upload.single('imageupdate'), productController.update);



//Eliminación de productos
router.delete('/delete/:id', productController.destroy); 

module.exports=router; //Exportación de la constante router