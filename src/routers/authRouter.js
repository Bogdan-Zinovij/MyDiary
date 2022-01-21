const Router = require('express');
const authRouter = new Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

authRouter
  .post('/registration', authController.registration)
  .post('/login', authController.login)
  .get('/users', authMiddleware, authController.getUsers);

module.exports = authRouter;
