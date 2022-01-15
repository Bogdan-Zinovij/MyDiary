'use strict';

const { Sequelize } = require('sequelize');

const MYSQL_HOST = 'localhost';
const MYSQL_PORT = '3306';
const MYSQL_USER = 'root';
const MYSQL_PASS = '12345678';
const MYSQL_DB = 'diarydb';

const db = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASS, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  logging: false,
  dialect: 'mysql',
});

module.exports = db;
