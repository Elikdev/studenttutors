const express = require('express');

const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const dbConnection = require('./config/db');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');

//database connection
dbConnection();

//init app
const app = express();

//handlebars
app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

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
		secret: 'elik',
		cookie: { maxAge: 4000000 },
		saveUninitialized: true,
		resave: true
	})
);

//express messages middleware
app.use(flash());

//routes
app.use('/user', require('./routes/index'));

//get the index view
app.get('/', (req, res) => {
	res.render('index', {
		title: 'Student-Tutors || Welcome',
		success: req.flash('success')
	});
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log('ST running on port 4000');
});
