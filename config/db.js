const mongoose = require('mongoose');
require('dotenv').config();

const dbCS = process.env.DB_CONNECT;

const dbConnection = () => {
	mongoose
		.connect(dbCS || 'mongodb://127.0.0.1:27017/studenttutors', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then(() => {
			console.log('Successfully connected to the database');
		})
		.catch(err => {
			console.error(err.message);
		});
};

module.exports = dbConnection;
