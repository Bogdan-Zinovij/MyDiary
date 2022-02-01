const jwt = require('jsonwebtoken');
const { refreshTokenSecret } = require('../config');

const generateRefreshToken = (userId) => {
  const payload = { userId };
  return jwt.sign(payload, refreshTokenSecret, { expiresIn: '24h' });
};

module.exports = generateRefreshToken;
