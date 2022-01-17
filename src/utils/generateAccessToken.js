const jwt = require('jsonwebtoken');

const generateAccessToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, 'secret', { expiresIn: '24h' });
};

module.exports = generateAccessToken;
