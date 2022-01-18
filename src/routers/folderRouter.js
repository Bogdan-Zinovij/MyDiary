const Router = require('express');
const folderRouter = new Router();
const folderController = require('../controllers/folderController');
const authMiddleware = require('../middleware/authMiddleware');

folderRouter.post('/create', authMiddleware, folderController.createFolder);
folderRouter.delete('/delete', authMiddleware, folderController.deleteFolder);
folderRouter.get('/getfolders', authMiddleware, folderController.getFolders);

module.exports = folderRouter;
