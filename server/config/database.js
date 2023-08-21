const mongoose = require('mongoose');

const connectDB = async () => {
	try {
	  console.log('Connection with mongodb');
	  await mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_STRING);
	} catch (error) {
	  console.log('Mongodb Connection Error', error);
	  process.exit(1);
	}
};


module.exports = connectDB;