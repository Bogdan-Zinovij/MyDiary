const Router = require('express');
const noteRouter = new Router();
const noteController = require('../controllers/noteController');

noteRouter
  .post('/', noteController.createNote)
  .delete('/', noteController.deleteNote)
  .get('/', noteController.getNotes)
  .patch('/', noteController.updateNote);

module.exports = noteRouter;
