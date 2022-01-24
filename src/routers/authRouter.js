const Router = require('express');
const authRouter = new Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const registrValidationScheme = require('../validation/registrValidation');

authRouter
  .post('/registration', registrValidationScheme, authController.registration)
  .post('/login', authController.login)
  .get('/users', authMiddleware, authController.getUsers);

module.exports = authRouter;
