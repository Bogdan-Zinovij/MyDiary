const Folder = require('../db/models/Folder');
const folderRouter = require('../routers/folderRouter');

class FolderController {
  async createFolder(req, res) {
    try {
      const { name } = req.body;
      const { id } = req.user;

      await Folder.create({ userId: id, name });

      res.status(201).json({ message: 'Folder was created!' });
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }

  async deleteFolder(req, res) {
    try {
      const { id } = req.body;
      const folder = await Folder.findOne({ where: { id } });

      if (!folder)
        throw new Error('Folder with the specified ID does not exist');

      await Folder.destroy({ where: { id } });

      res.status(200).json({ message: 'Folder was deleted' });
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }

  async getFolders(req, res) {
    try {
      const folderList = await Folder.findAll({ order: ['id'] });

      res.status(200).json(folderList);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }
}

module.exports = new FolderController();
