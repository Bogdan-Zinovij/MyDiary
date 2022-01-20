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
    const decodedData = jwt.verify(token, secret);
    req.userId = decodedData.userId;
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({ message: 'The user is not authorized' });
  }
};
