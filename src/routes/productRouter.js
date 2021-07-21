const express = require("express");
const router = express.Router();
const multer = require('multer'); //se agregó constante para el Multer
const productController = require("../controllers/productController")


let storage = multer.diskStorage({    //configuración del disco de almacenamiento
    destination: (req, file, cb)=>{
        cb (null, '../public/images/productImages');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
      }
    })

//const uploadFile = multer({storage});

const upload = multer({ storage: storage })

//Listado de productos
router.get("/", productController.productList);

//Detalle del producto
router.get("/productDetail/:id", productController.productDetail);


// Creación de productos
router.get("/createProduct", productController.createProduct);
router.post("/", upload.single('image'), productController.createProduct);

/*//Edición de productos
router.get('/editProduct/:id', productController.editProduct); 
router.put('/editProduct/:id', upload.single('productImages'), productController.update);

//Eliminación de productos

router.delete('/delete/:id', productController.destroy); */