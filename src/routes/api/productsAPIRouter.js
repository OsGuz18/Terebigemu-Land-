const express = require('express');
const router = express.Router();
const productsAPIController = require("../../controllers/api/productsAPIController")

//Rutas
//Listado de todos los actores
router.get('/', productsAPIController.productsList);
router.get('/:id', productsAPIController.productDetail);



module.exports = router;