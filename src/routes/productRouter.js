//Declaración de constantes a utilizar 
const express = require("express"); //Requerimos la paquetería de express (Previamente instalada)
const router = express.Router(); //Declaramos la constante router con la propiedad de express
const multer = require('multer'); //Requerimos la paquetería de "Multer" para subir imagenes al sevirodr (Previamente instalado)
const path = require("path") //Requerimos la paquetería "path" contenida en node
const productController = require("../controllers/productController") //Requerimos el controlador para productos.

//Configuración para subir archivos al servidor mediante Multer
let storage = multer.diskStorage({    
    destination: (req, file, cb)=>{
        cb (null, path.join(__dirname,'../../public/images/products'));
    },
    filename: function (req, file, cb) {
        cb(null, "product" + '-' + Date.now() + path.extname(file.originalname))
      }
})
const upload = multer({ storage: storage })

//Listado de productos
router.get("/", productController.productList);

//Detalle del producto
router.get("/productDetail/:id", productController.productDetail);

// Creación de productos
router.get("/create", productController.createProduct);
router.post("/create", upload.single('image'), productController.store);

//Edición de productos
router.get('/editProduct/:id', productController.editProduct); 
router.put('/editProduct/:id', upload.single('imageupdate'), productController.update);

//Eliminación de productos
router.delete('/delete/:id', productController.destroy); 

module.exports=router; //Exportación de la constante router