const Router = require('express');
const folderRouter = new Router();
const folderController = require('../controllers/folderController');
const folderValidationScheme = require('../validation/folderValidation');

folderRouter
  .post('/', folderValidationScheme, folderController.createFolder)
  .delete('/', folderController.deleteFolder)
  .get('/', folderController.getFolders);

module.exports = folderRouter;
