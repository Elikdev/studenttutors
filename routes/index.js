const express = require('express');

const { check } = require('express-validator');
const indexController = require('../controllers/index');
const indexRouter = express.Router();

indexRouter.get('/register', indexController.registerPage);
indexRouter.post(
	'/register',
	[
		check('fullname', 'Name field is empty').notEmpty(),
		check('email', 'Email is empty or invalid').isEmail(),
		check('password', 'Password is empty or too short').isLength({ min: 6 }),
		check('level', 'Level field is empty').notEmpty(),
		check('profile_details', 'Profile details field is empty').notEmpty()
	],
	indexController.registerUser
);
indexRouter.get('/login', indexController.loginPage);
indexRouter.post(
	'/login',
	[
		check('email', 'Email is empty or too short').isEmail(),
		check('password', 'Password is empty or too short').notEmpty()
	],
	indexController.loginUser
);

indexRouter.get('/logout', indexController.logUserout);

module.exports = indexRouter;
