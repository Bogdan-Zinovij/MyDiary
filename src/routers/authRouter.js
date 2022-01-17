const Router = require('express');
const authRouter = new Router();
const authController = require('../controllers/authController');

authRouter.post('/registration', authController.registration);
authRouter.post('/login', authController.login);
authRouter.get('/users', authController.getUsers);

module.exports = authRouter;
