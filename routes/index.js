const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/homeController");
const usuariosController = require('../controllers/usuariosController');



router.get('/', HomeController.index) ;
router.get('/usuarios', usuariosController.index) ;

module.exports = router;
