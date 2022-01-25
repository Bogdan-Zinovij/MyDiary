const Router = require('express');
const authRouter = new Router();
const authController = require('../controllers/authController');
const registrValidationScheme = require('../validation/registrValidation');
const loginValidationScheme = require('../validation/loginValidation');

authRouter
  .post('/registration', registrValidationScheme, authController.registration)
  .post('/login', loginValidationScheme, authController.login)
  .get('/users', authController.getUsers);

module.exports = authRouter;
