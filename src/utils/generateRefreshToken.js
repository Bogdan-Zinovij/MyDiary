const jwt = require('jsonwebtoken');
const { secret } = require('../config');

const generateRefreshToken = (userId) => {
  const payload = { userId };
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

module.exports = generateRefreshToken;
