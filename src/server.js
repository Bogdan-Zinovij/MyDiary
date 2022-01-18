'use strict';

const Folder = require('./db/models/Folder');
const Note = require('./db/models/Note');
const User = require('./db/models/User');

require('dotenv').config();

const associate = require('./db/associate');

const app = require('./app');

(async () => {
  try {
    associate();
    [User, Folder, Note].forEach(async (model) => await model.sync());

    const EXPRESS_PORT = process.env.EXPRESS_PORT;

    app.listen(EXPRESS_PORT, () => {
      console.log(`Server listening on http://localhost:${EXPRESS_PORT}`);
    });
  } catch (error) {
    throw error;
  }
})();
