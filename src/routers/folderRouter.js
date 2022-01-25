const Router = require('express');
const folderRouter = new Router();
const folderController = require('../controllers/folderController');

folderRouter
  .post('/', folderController.createFolder)
  .delete('/', folderController.deleteFolder)
  .get('/', folderController.getFolders);

module.exports = folderRouter;
