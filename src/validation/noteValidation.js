const { body } = require('express-validator');

const noteValidationScheme = [
  body('title')
    .notEmpty()
    .withMessage('Title can not be empty')
    .isLength({ max: 16 })
    .withMessage('The title must be up to 16 characters long'),
  body('description')
    .isLength({ max: 4000 })
    .withMessage('The description must be up to 4000 characters long'),
];

module.exports = noteValidationScheme;
