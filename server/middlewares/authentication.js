const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

// This is in order to keep user logged in, I guess
const authenticate = async (req, res, next) => {
  try {
    if (req.cookies.accessToken) {
      const user = await jwt.verify(req.cookies.accessToken, SECRET);
      console.log(
        '🚀 ~ file: authentication.js:9 ~ authenticate ~ user:',
        user
      );
      req.user = user;
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  } catch (error) {
    console.log('current use error');
    next(error);
  }
};
module.exports = authenticate;

// reg - incoming (request)
// res - outgoing (response)
