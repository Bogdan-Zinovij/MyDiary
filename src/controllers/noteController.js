const Note = require('../db/models/Note');
const Folder = require('../db/models/Folder');
const { validationResult } = require('express-validator');

class NoteController {
  async createNote(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors });
      }

      const { folderId } = req.body;
      const userId = req.userId;
      const folder = await Folder.findByPk(folderId);

      if (!folder) {
        throw new Error('Folder with the specified ID does not exist');
      }

      if (folder.userId !== userId) {
        throw new Error('This folder does not belong to the user');
      }

      await Note.create(req.body);

      res.status(201).json({ message: 'Note was created!' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async deleteNote(req, res) {
    try {
      const { id } = req.body;
      const userId = req.userId;
      const note = await Note.findByPk(id);

      if (!note) {
        throw new Error('Note with the specified ID does not exist');
      }

      const folder = await Folder.findByPk(note.folderId);

      if (folder.userId !== userId) {
        throw new Error('This note does not belong to the user');
      }

      await note.destroy();

      res.status(200).json({ message: 'Note was deleted' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getNotes(req, res) {
    try {
      const userId = req.userId;
      const { folderId } = req.body;
      const folder = await Folder.findByPk(folderId);

      if (!folder) {
        throw new Error('Folder with the specified ID does not exist');
      }

      if (folder.userId !== userId) {
        throw new Error('This folder does not belong to the user');
      }

      const noteList = await Note.findAll({
        where: { folderId },
        order: ['id'],
      });

      res.status(200).json(noteList);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateNote(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors });
      }

      const userId = req.userId;
      const { id, dataToUpdate } = req.body;
      const note = await Note.findByPk(id);

      if (!note) {
        throw new Error('Note with the specified ID does not exist');
      }

      const folder = await Folder.findByPk(note.folderId);

      if (folder.userId !== userId) {
        throw new Error('This note does not belong to the user');
      }

      const [isUpdated] = await Note.update(dataToUpdate, { where: { id } });

      if (isUpdated) {
        res.status(200).json({ message: 'Note was updated' });
      } else {
        res.status(400).json({ message: 'Failed to update note' });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new NoteController();
