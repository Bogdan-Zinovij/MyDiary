const Folder = require('../db/models/Folder');
const { validationResult } = require('express-validator');

class FolderController {
  async createFolder(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors });
      }

      const { name } = req.body;
      const userId = req.userId;

      await Folder.create({ userId, name });

      res.status(201).json({ message: 'Folder was created!' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async deleteFolder(req, res) {
    try {
      const { id } = req.body;
      const userId = req.userId;
      const folder = await Folder.findByPk(id);

      if (!folder) {
        throw new Error('Folder with the specified ID does not exist');
      }

      if (folder.userId !== userId) {
        throw new Error('This folder does not belong to the user');
      }

      await folder.destroy();

      res.status(200).json({ message: 'Folder was deleted' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getFolders(req, res) {
    try {
      const userId = req.userId;
      const folderList = await Folder.findAll({
        where: { userId },
        order: ['id'],
      });

      res.status(200).json(folderList);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new FolderController();
