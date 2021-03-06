const jwt = require('jsonwebtoken');
const { accessTokenSecret } = require('../config');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const accessToken = req.headers.accesstoken;

    if (!accessToken) {
      return res.status(401).json({ message: 'The user is not authorized' });
    }

    const payload = jwt.verify(accessToken, accessTokenSecret);
    req.userId = payload.userId;

    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: 'The access token expired' });
    }

    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Invalid access token' });
    }

    return res.status(400).json({ message: err.message });
  }
};
