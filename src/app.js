'use strict';

const express = require('express');
const authRouter = require('./routers/authRouter');
// const userController = require('./controllers/userController');
// const noteController = require('./controllers/noteController');
// const folderController = require('./controllers/folderController');

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

module.exports = app;
