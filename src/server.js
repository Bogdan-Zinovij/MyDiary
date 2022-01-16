const Folder = require('./db/models/Folder');
const Note = require('./db/models/Note');
const User = require('./db/models/User');

const associate = require('./db/associate');

const app = require('./app');

(async () => {
  try {
    associate();
    [User, Folder, Note].forEach(async (model) => await model.sync());

    const EXPRESS_PORT = 8080;

    app.listen(EXPRESS_PORT, () => {
      console.log(`Server listening on http://localhost:${EXPRESS_PORT}`);
    });
  } catch (error) {
    throw error;
  }
})();
