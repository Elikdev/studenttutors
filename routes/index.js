const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const indexController = require('../controllers/index');

router.get('/login', indexController.loginPage);
router.post(
	'/login',
	[
		check('email', 'Email is empty or too short').isEmail(),
		check('password', 'Password is empty or too short').notEmpty()
	],
	indexController.loginUser
);
router.get('/register', indexController.registerPage);
router.post(
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
router.get('/logout', indexController.logUserout);

module.exports = router;
