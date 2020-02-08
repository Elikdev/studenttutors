const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.registerPage = (req, res) => {
	res.render('index');
};
exports.registerUser = (req, res) => {
	let { fullname, email, password, level, profile_details, role } = req.body;

	let errors = [];

	//avoid emptiness
	if (!fullname) {
		errors.unshift({
			text: 'Some required fields have not been entered'
		});
	}
	if (!email) {
		errors.unshift({
			text: 'Some required fields have not been entered'
		});
	}
	if (!password) {
		errors.unshift({
			text: 'Some required fields have not been entered'
		});
	}
	if (!level) {
		errors.unshift({
			text: 'Some required fields have not been entered'
		});
	}
	if (!profile_details) {
		errors.unshift({
			text: 'Some required fields have not been entered'
		});
	}

	//find out if the new user is using a registered email address
	User.findOne({ email: email })
		.then(found => {
			if (!found) {
				bcrypt
					.hash(password, 10)
					.then(hashedPassword => {
						const user = new User({
							fullname: fullname,
							email: email,
							password: hashedPassword,
							level: level,
							profile_details: profile_details,
							role: role || 'basic'
						});

						//save user to database
						user
							.save()
							.then(() => {
								res.render('index', {
									message: {
										success: true
									},
									email
								});
							})
							.catch(err => {
								res.status(500);
								console.log(err.message);
							});
					})
					.catch(err => {
						console.log(err.message);
					});
			} else {
				errors.unshift({
					text:
						'We found out that this email is already registered with us. You might want to change it'
				});
			}
		})
		.catch(err => {
			res.status(500);
			console.log(err.message);
		});

	//if there are any errors
	if (errors > 0) {
		res.render('index', {
			layout: 'formLayout2',
			errors,
			fullname,
			email,
			password,
			level,
			profile_details
		});
	}
};

exports.loginPage = (req, res) => {
	res.render('index');
};

exports.loginUser = (req, res) => {
	let { email, password } = req.body;
	let errors = [];

	if (!email) {
		errors.unshift({
			text: 'Please enter your email'
		});
	}
	if (!password) {
		errors.unshift({
			text: 'Please enter a correct password'
		});
	}

	User.findOne({ email: email })
		.then(user => {
			if (!user) {
				errors.unshift({
					text: 'Email is not registered with us'
				});
			} else {
				bcrypt
					.compare(password, user.password)
					.then(valid => {
						if (!valid) {
							errors.unshift({
								text: 'Wrong email/password'
							});
						} else {
							res.render('index', {
								message: {
									success: true
								},
								email
							});
						}
					})
					.catch(err => {
						console.log(err);
					});
			}
		})
		.catch(err => {
			console.log(err);
		});

	//if there are any errors
	if (errors.length > 0) {
		res.render('index', {
			layout: 'formLayout',
			errors,
			email
		});
	}
};

exports.logUserout = (req, res) => {
	res.redirect('/user/login');
};
