exports.tutorPage = (req, res) => {
	res.render('search', {
		email: req.session.email,
	});
};
