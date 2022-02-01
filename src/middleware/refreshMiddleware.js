const jwt = require('jsonwebtoken');
const { refreshTokenSecret } = require('../config');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const refreshToken = req.headers.refreshtoken;

    if (!refreshToken) {
      return res.status(401).json({ message: 'The user is not authorized' });
    }

    const payload = jwt.verify(refreshToken, refreshTokenSecret);
    req.userId = payload.userId;

    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: 'The refresh token expired' });
    }

    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    return res.status(400).json({ message: err.message });
  }
};
