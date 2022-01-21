const Router = require('express');
const noteRouter = new Router();
const noteController = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');

noteRouter
  .post('/', authMiddleware, noteController.createNote)
  .delete('/', authMiddleware, noteController.deleteNote)
  .get('/', authMiddleware, noteController.getNotes)
  .patch('/', authMiddleware, noteController.updateNote);

module.exports = noteRouter;
