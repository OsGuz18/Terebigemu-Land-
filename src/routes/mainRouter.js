const express = require("express");
const router = express.Router();
//const multer = require('multer');
const mainController = require("../controllers/mainController")
//const uploadFile = multer({storage});

/*let storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb (null, '../public/images/productImages');
    },
    filename: (req, file, cb)=>{
        cb (null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
})*/


router.get("/",mainController.index)

router.get("/login",mainController.login)
router.get("/register",mainController.register)
router.get("/shopping-car",mainController.shoppingCar)




module.exports=router;