const express = require('express');
const tutorRouter = require('./routes/tutors');
const indexRouter = require('./routes/index');
const indexRoutes = require('./routes/home');
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config/config');
const dbConnection = require('./config/db');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');

//database connection
dbConnection();

//init app
const app = express();

//handlebars
app.engine('hbs', exhbs({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//static folders
app.use(express.static(path.join(__dirname, 'public')));

//cookie-parser midddleware
app.use(cookieParser('elik'));

//express session middleware
app.use(
	session({
		name: 'elik',
		secret: config.SESS_KEY,
		cookie: { maxAge: 1000 * 60 * 60 * 24 },
		saveUninitialized: true,
		resave: false,
	})
);
app.use((req, res, next) => {
	res.locals.session = req.session;
	next();
});

//express messages middleware
app.use(flash());

//routes
app.use('/', indexRoutes);
app.use('/tutors', tutorRouter);
app.use('/user', indexRouter);

//get the index view
app.get('/', (req, res) => {
	const user = req.session.email;

	if (!user) {
		res.render('index', {
			title: 'Student-Tutors || Welcome',
			session: false,
		});
	} else {
		res.render('index', {
			title: 'Student-Tutors || Welcome',
			success: req.flash('success'),
			session: true,
			email: req.session.email,
		});
	}
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log('ST running on port 4000');
});
