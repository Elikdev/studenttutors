const express = require('express');

const tutorsController = require('../controllers/tutors');

const tutorRouter = express.Router();

tutorRouter.get('/explore', tutorsController.tutorPage);
module.exports = tutorRouter;
