const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

router.get('/login', indexController.loginPage);
router.post('/login', indexController.loginUser);
router.get('/register', indexController.registerPage);
router.post('/register', indexController.registerUser);
router.get('/logout', indexController.logUserout);

module.exports = router;
