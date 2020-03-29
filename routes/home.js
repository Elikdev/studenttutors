const indexRoutes = require('express').Router();
const indexCtrl = require('../controllers/home');

indexRoutes.post('/contact', indexCtrl.contactForm);

module.exports = indexRoutes;
