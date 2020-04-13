require('dotenv').config();

module.exports = {
	ENV: process.env.NODE_ENV || 'development',
	MONGODB_URL:
		process.env.DB_CONNECT || 'mongodb://127.0.0.1:27017/studenttutors',
	SESS_KEY: process.env.SESS_KEY,
};
