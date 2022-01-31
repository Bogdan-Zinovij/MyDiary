const jwt = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(403).json({ message: 'The user is not authorized' });
    }

    const payload = jwt.verify(token, secret);
    req.userId = payload.userId;

    next();
  } catch (err) {
    return res.status(403).json({ message: err.message });
  }
};
