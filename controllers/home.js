const nodemailer = require('nodemailer');

exports.contactForm = (req, res) => {
	//initializing the stmp transport
	const stmpTrans = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: '465',
		secure: true,
		auth: {
			user: USER_MAIL,
			pass: USER_PASS
		}
	});
	//setting the options of the mail
	const mailOpts = {
		from: req.body.email,
		to: USER_MAIL,
		subject: `Contact-us form page from student-tutors by a user(${req.body.firstname})`,
		html: `<p>This mail is from student-tutors contact-us form page. The details are as follow;</p><br/> <h2>Name:  </h2> <p>${req.body.name}</p> <br/> <h2>Email:  </h2> <p>${req.body.email}</p> <br/> <h2>Phone Number:  </h2> <p>${req.body.mobile_num}</p> <br/> <h2>Message:  </h2> <p>${req.body.message}</p>`
	};

	//send the mail if there are no error
	stmpTrans.sendMail(mailOpts, (err, res) => {
		if (err) {
			res.send('errror');
		} else {
			res.send('success');
		}
	});
};
