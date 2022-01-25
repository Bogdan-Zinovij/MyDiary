const { body } = require('express-validator');

const loginValidationScheme = [
  body('nickname').notEmpty().withMessage('Nickname can not be empty'),
  body('password').notEmpty().withMessage('Password can not be empty'),
];

module.exports = loginValidationScheme;
