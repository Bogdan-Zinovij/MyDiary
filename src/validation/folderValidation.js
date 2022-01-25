const { body } = require('express-validator');

const folderValidationScheme = [
  body('name')
    .notEmpty()
    .withMessage(`Folder's name can not be empty`)
    .isLength({ max: 16 })
    .withMessage('The folder name must be up to 16 characters long'),
];

module.exports = folderValidationScheme;
