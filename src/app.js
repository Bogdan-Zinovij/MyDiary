'use strict';

const express = require('express');
const authRouter = require('./routers/authRouter');
const folderRouter = require('./routers/folderRouter');
const noteRouter = require('./routers/noteRouter');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

app.use(express.json());
app.use('/auth', authRouter);
app.use('/folder', authMiddleware, folderRouter);
app.use('/note', authMiddleware, noteRouter);

module.exports = app;
