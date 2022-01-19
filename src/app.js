'use strict';

const express = require('express');
const authRouter = require('./routers/authRouter');
const folderRouter = require('./routers/folderRouter');
const noteRouter = require('./routers/noteRouter');

const app = express();

app.use(express.json());
app.use('/auth', authRouter);
app.use('/folder', folderRouter);
app.use('/note', noteRouter);

module.exports = app;
