'use strict';

const express = require('express');
const authRouter = require('./routers/authRouter');
const folderRouter = require('./routers/folderRouter');

const app = express();

app.use(express.json());
app.use('/auth', authRouter);
app.use('/folder', folderRouter);

module.exports = app;
