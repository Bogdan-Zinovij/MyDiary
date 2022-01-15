'use strict';

const Folder = require('./models/Folder');
const Note = require('./models/Note');
const User = require('./models/User');

const associate = () => {
  Folder.hasMany(Note, {
    foreignKey: 'folderId',
  });

  Note.belongsTo(Folder);

  User.hasMany(Folder, {
    foreignKey: 'userId',
  });

  Folder.belongsTo(User);
};

module.exports = associate;
