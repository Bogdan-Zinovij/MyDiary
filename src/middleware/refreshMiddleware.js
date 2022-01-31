const jwt = require('jsonwebtoken');
const { secretRefresh } = require('../config');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.refreshToken;

    if (!token) {
      return res.status(403).json({ message: 'Token does not exist' });
    }

    const payload = jwt.verify(token, secretRefresh);
    req.userId = payload.userId;

    next();
  } catch (err) {
    return res.status(403).json({ message: err.message });
  }
};
