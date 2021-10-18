const express = require('express');
const router = express.Router();
const usersAPIController = require("../../controllers/api/usersAPIController")

//Rutas
//Listado de todos los actores
router.get('/', usersAPIController.usersList);
router.get('/:id', usersAPIController.userDetail);



module.exports = router;