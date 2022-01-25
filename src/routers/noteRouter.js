const Router = require('express');
const noteRouter = new Router();
const noteController = require('../controllers/noteController');
const noteValidationScheme = require('../validation/noteValidation');

noteRouter
  .post('/', noteValidationScheme, noteController.createNote)
  .delete('/', noteController.deleteNote)
  .get('/', noteController.getNotes)
  .patch('/', noteValidationScheme, noteController.updateNote);

module.exports = noteRouter;
