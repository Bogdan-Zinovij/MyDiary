const Router = require('express');
const authRouter = new Router();
const authController = require('../controllers/authController');
const {
  registrValidationScheme,
  loginValidationScheme,
} = require('../validation/authValidation');

authRouter
  .post('/registration', registrValidationScheme, authController.registration)
  .post('/login', loginValidationScheme, authController.login)
  .get('/users', authController.getUsers)
  .post('/refresh', authController.refreshToken);

module.exports = authRouter;
