const mongoose = require('mongoose');
const config = require('./config');

const dbCS = config.MONGODB_URL;

const dbConnection = () => {
	mongoose
		.connect(dbCS, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log('Successfully connected to the database');
		})
		.catch((err) => {
			console.error(err.message);
		});
};

module.exports = dbConnection;
