const jwt = require('jsonwebtoken');
const { accessTokenSecret } = require('../config');

const generateAccessToken = (userId) => {
  const payload = { userId };
  return jwt.sign(payload, accessTokenSecret, { expiresIn: '3m' });
};

module.exports = generateAccessToken;
