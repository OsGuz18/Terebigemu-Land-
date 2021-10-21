const express = require('express');
const router = express.Router();
const categoryAPIController = require("../../controllers/api/categoryAPIController")

//Rutas
//Listado de todos los actores
router.get('/', categoryAPIController.all);




module.exports = router;