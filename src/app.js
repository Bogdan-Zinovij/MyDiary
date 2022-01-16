'use strict';

const express = require('express');
const User = require('./db/models/User');
// const userController = require('./controllers/userController');
// const noteController = require('./controllers/noteController');
// const folderController = require('./controllers/folderController');

const app = express();

app.use(express.json());
app.get('/', async (req, res) => {
  try {
    const aFor = await User.findAll();
    return res.json(aFor);
  } catch (e) {
    return res.json({ message: e.message });
  }
});

module.exports = app;
