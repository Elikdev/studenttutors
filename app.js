const express = require('express');
const app = express();
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const dbConnection = require('./config/db');

//database connection
dbConnection();

//handlebars
app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//static folders
app.use(express.static(path.join(__dirname, 'public')));

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//routes
app.use('/user', require('./routes/index'));

//get the index view
app.get('/', (req, res) => {
	res.render('index');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log('ST running on port 4000');
});
