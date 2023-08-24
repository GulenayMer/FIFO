require('dotenv/config');
const connectDB = require('./config/database');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const usersAuthRouter = require('./routes/users');
const inventoryItemsRouter = require('./routes/inventoryItems');
const menuRouter = require('./routes/menus');
const dishRouter = require('./routes/dishes')
const path = require('path'); // conects the BE to the FE

app.use(cors({origin:process.env.FRONTEND_URL, credentials:true}))//the credentials is important to let the browser know that the port is secured.
//cookies
app.use(cookieParser()); // it allows us to get cookies on the request

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
// This will be the baseURL : localhost:8000/api/...
app.use('/api/user/auth', usersAuthRouter);
app.use('/api/inventoryItems', inventoryItemsRouter);
app.use('/api/dishes', dishRouter);
app.use('/api/menu', menuRouter);




connectDB().then(() => {
	app.listen(PORT, () => console.log('PORT:', PORT));
});