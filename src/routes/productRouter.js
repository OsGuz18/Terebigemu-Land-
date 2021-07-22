const express = require("express");
const router = express.Router();
const multer = require('multer'); //se agregó constante para el Multer
const productController = require("../controllers/productController")
const path = require("path")


let storage = multer.diskStorage({    //configuración del disco de almacenamiento
    destination: (req, file, cb)=>{
        cb (null, path.join(__dirname,'../../public/images'));
    },
    filename: function (req, file, cb) {
        cb(null, "product" + '-' + Date.now() + path.extname(file.originalname))
      }
    })

//const uploadFile = multer({storage});

const upload = multer({ storage: storage })

//Listado de productos
router.get("/", productController.productList);

//Detalle del producto
router.get("/productDetail/:id", productController.productDetail);


// Creación de productos
router.get("/create", productController.createProduct);
router.post("/create", upload.single('image'), productController.store);

/*//Edición de productos
router.get('/editProduct/:id', productController.editProduct); 
router.put('/editProduct/:id', upload.single('productImages'), productController.update);

//Eliminación de productos

router.delete('/delete/:id', productController.destroy); */

module.exports=router;