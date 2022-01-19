const Note = require('../db/models/Note');

class NoteController {
  async createNote(req, res) {
    try {
      await Note.create(req.body);

      res.status(201).json({ message: 'Note was created!' });
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }

  async deleteNote(req, res) {
    try {
      const { id } = req.body;
      const note = await Note.findOne({ where: { id } });

      if (!note) throw new Error('Note with the specified ID does not exist');

      await Note.destroy({ where: { id } });

      res.status(200).json({ message: 'Note was deleted' });
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }

  async getNotes(req, res) {
    try {
      const noteList = await Note.findAll({ order: ['id'] });

      res.status(200).json(noteList);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }
}

module.exports = new NoteController();
