const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

// This is in order to keep user logged in, I guess
const authenticate = async (req,res, next)=>{
  try{
		if(req.cookies.accessToken){
		  const user = await jwt.verify(req.cookies.accessToken, SECRET);
		  req.user = user;
		  next()
		}
		res.status(403).json({message: 'Forbidden'});	
	}catch(error){
		next(error)
	}
}
module.exports = authenticate


 