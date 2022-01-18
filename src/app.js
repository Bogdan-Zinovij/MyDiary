'use strict';

const express = require('express');
const authRouter = require('./routers/authRouter');

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

module.exports = app;
