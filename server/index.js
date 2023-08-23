require('dotenv/config');
const connectDB = require('./config/database');
const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users');
const inventoryItemsRouter = require('./routes/inventoryItems');
const menuRouter = require('./routes/menus');
const dishRouter = require('./routes/dishes')
const path = require('path'); // conects the BE to the FE

//
const app = express();
const PORT = 8000;
app.use(express.json());

//Deployment
if(process.env.NODE_ENV ==='production'){
	const buildPath = path.join(_dirname,'../client/dist');
	app.use(express.static(buildPath));

	app.get('*',(req,res)=> res.sendFile(path.join(buildPath,'index.html')))
}



// ROUTES : 
// This will be the baseURL : localhost:8000/api/user
app.use('/api/user', usersRouter);
app.use('/api/inventoryItems', inventoryItemsRouter);
app.use('/api/dishes', dishRouter);
app.use('/api/menu', menuRouter);



connectDB().then(() => {
	app.listen(PORT, () => console.log('🚀 ~ file: index.js:11 ~ PORT:', PORT));
});