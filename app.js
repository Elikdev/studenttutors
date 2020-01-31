const express = require('express');
const app = express();
const exhbs = require('express-handlebars');
// const bodyParser = require('bodyparser');
const path = require('path');
const dbConnection = require('./config/db');

//database connection
dbConnection();

//handlebars
app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//static folders
app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.urlencoded({ extended: true }));

//get the index view
app.get('/studenttutors', (req, res) => {
	res.render('index');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log('ST running on port 4000');
});
