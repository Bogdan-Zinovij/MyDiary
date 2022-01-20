const jwt = require('jsonwebtoken');
const { secret } = require('../config');

const generateAccessToken = (userId) => {
  const payload = { userId };
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

module.exports = generateAccessToken;
