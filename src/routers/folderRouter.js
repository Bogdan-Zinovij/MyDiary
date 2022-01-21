const Router = require('express');
const folderRouter = new Router();
const folderController = require('../controllers/folderController');
const authMiddleware = require('../middleware/authMiddleware');

folderRouter
  .post('/', authMiddleware, folderController.createFolder)
  .delete('/', authMiddleware, folderController.deleteFolder)
  .get('/', authMiddleware, folderController.getFolders);

module.exports = folderRouter;
