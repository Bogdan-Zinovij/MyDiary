const Router = require('express');
const noteRouter = new Router();
const noteController = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');

noteRouter.post('/create', authMiddleware, noteController.createNote);
noteRouter.delete('/delete', authMiddleware, noteController.deleteNote);
noteRouter.get('/getnotes', authMiddleware, noteController.getNotes);

module.exports = noteRouter;
